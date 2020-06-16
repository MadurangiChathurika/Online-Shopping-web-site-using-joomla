/* jce - 2.7.12 | 2019-04-30 | https://www.joomlacontenteditor.net | Copyright (C) 2006 - 2019 Ryan Demmer. All rights reserved | GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html */
!function(){var VK=tinymce.VK,Node=tinymce.html.Node,each=tinymce.each,blocks=(tinymce.map,[]);tinymce.create("tinymce.plugins.Figure",{init:function(ed,url){this.editor=ed,ed.onPreInit.add(function(ed){ed.parser.addNodeFilter("figure",function(nodes,name){for(var node,i=nodes.length;i--;){if(node=nodes[i],0===node.getAll("figcaption").length){var figcaption=new Node("figcaption",1);figcaption.attr("data-mce-empty",ed.getLang("figcaption.default","Write a caption...")),node.append(figcaption)}node.getAll("img").length&&node.attr("data-mce-image","1")}}),ed.parser.addNodeFilter("figcaption",function(nodes,name){for(var node,i=nodes.length;i--;)node=nodes[i],node.firstChild||node.attr("data-mce-empty",ed.getLang("figcaption.default","Write a caption..."))}),ed.serializer.addNodeFilter("figure",function(nodes,name){for(var node,i=nodes.length;i--;)node=nodes[i],node.attr("contenteditable",null)}),ed.serializer.addNodeFilter("figcaption",function(nodes,name){for(var node,i=nodes.length;i--;)node=nodes[i],node.firstChild?node.attr("contenteditable",null):node.remove()}),ed.serializer.addAttributeFilter("data-mce-image",function(nodes,name){for(var node,i=nodes.length;i--;)node=nodes[i],node.attr(name,null)}),each(ed.schema.getBlockElements(),function(v,k){blocks.push(k.toLowerCase())}),ed.formatter.register("figure",{block:"figure",remove:"all",wrapper:!0,onformat:function(elm,fmt,vars,node){var node=ed.selection.getNode(),parent=ed.dom.getParent(node,blocks.join(","));"IMG"===node.nodeName&&(parent&&(ed.dom.add(parent,"figcaption",{"data-mce-empty":ed.getLang("figcaption.default","Write a caption...")}),ed.dom.replace(ed.dom.create("figure"),parent,1)),ed.dom.setAttrib(elm,"data-mce-image",1))}}),each(["alignleft","aligncenter","alignright"],function(action){var formats=ed.formatter.get(action);formats.length&&each(formats,function(fmt){/img/.test(fmt.selector)&&(fmt.onformat=function(elm){var parent=ed.dom.getParent(elm,"FIGURE");parent&&(ed.formatter.remove(action,parent),ed.formatter.apply(action,{},parent))})})}),ed.onBeforeExecCommand.add(function(ed,cmd,ui,v,o){var se=ed.selection,n=se.getNode();switch(cmd){case"FormatBlock":if("figure"===v){var fig=ed.dom.getParent(n,"figure");fig&&ed.dom.remove(ed.dom.select("figcaption",fig))}break;case"mceToggleFormat":if("figure"===v){var fig=ed.dom.getParent(n,"figure");fig&&ed.dom.remove(ed.dom.select("figcaption",fig))}break;case"JustifyRight":case"JustifyLeft":case"JustifyCenter":if(n&&"IMG"===n.nodeName){var parent=ed.dom.getParent(n,"FIGURE");parent&&(se.select(parent),ed.execCommand(cmd,!1),o.terminate=!0)}}}),ed.onExecCommand.add(function(ed,cmd,ui,v,o){var se=ed.selection,n=se.getNode();switch(cmd){case"JustifyRight":case"JustifyLeft":case"JustifyCenter":if(n&&"FIGURE"===n.nodeName){var img=ed.dom.select("IMG",n);img.length&&se.select(img[0])}}}),ed.onKeyDown.add(function(ed,e){var isDelete,rng,container;if(isDelete=e.keyCode==VK.DELETE,!e.isDefaultPrevented()&&(isDelete||e.keyCode==VK.BACKSPACE)&&!VK.modifierPressed(e)&&(rng=ed.selection.getRng(),container=rng.startContainer,offset=rng.startOffset,collapsed=rng.collapsed,"FIGCAPTION"!=container.nodeName||container.nodeValue&&0!==container.nodeValue.length||e.preventDefault(),3===container.nodeType&&!collapsed&&!offset)){var figcaption=ed.dom.getParent(container,"FIGCAPTION");if(figcaption){for(;figcaption.firstChild;)figcaption.removeChild(figcaption.firstChild);e.preventDefault()}}})})}}),tinymce.PluginManager.add("figure",tinymce.plugins.Figure)}();