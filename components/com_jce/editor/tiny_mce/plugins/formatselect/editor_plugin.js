/* jce - 2.7.12 | 2019-04-30 | https://www.joomlacontenteditor.net | Copyright (C) 2006 - 2019 Ryan Demmer. All rights reserved | GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html */
!function(){var each=tinymce.each,fmts={p:"advanced.paragraph",address:"advanced.address",pre:"advanced.pre",h1:"advanced.h1",h2:"advanced.h2",h3:"advanced.h3",h4:"advanced.h4",h5:"advanced.h5",h6:"advanced.h6",div:"advanced.div",div_container:"advanced.div_container",blockquote:"advanced.blockquote",code:"advanced.code",samp:"advanced.samp",span:"advanced.span",section:"advanced.section",article:"advanced.article",aside:"advanced.aside",header:"advanced.header",footer:"advanced.footer",nav:"advanced.nav",figure:"advanced.figure",dt:"advanced.dt",dd:"advanced.dd"};tinymce.create("tinymce.plugins.FormatSelectPlugin",{init:function(ed,url){function isFormat(n){return tinymce.inArray(nodes,n.nodeName)!==-1}this.editor=ed;var nodes=[];each(ed.getParam("formatselect_blockformats",fmts,"hash"),function(v,k){nodes.push(k.toUpperCase())}),ed.onNodeChange.add(function(ed,cm,n){var p,c=cm.get("formatselect"),value="";c&&(p=ed.dom.getParent(n,isFormat,ed.getBody()),p&&p.nodeName&&(value=p.nodeName.toLowerCase()),c.select(value))})},createControl:function(n,cf){if("formatselect"===n)return this._createBlockFormats()},_createBlockFormats:function(){var c,ed=this.editor,PreviewCss=tinymce.util.PreviewCss;return c=ed.controlManager.createListBox("formatselect",{title:"advanced.block",min_height:200,onselect:function(v){return ed.execCommand("FormatBlock",!1,v),!1}}),c&&each(ed.getParam("formatselect_blockformats",fmts,"hash"),function(v,k){c.add(ed.translate(v,k),k,{class:"mce_formatPreview mce_"+k,style:function(){return PreviewCss(ed,{block:k})}})}),c}}),tinymce.PluginManager.add("formatselect",tinymce.plugins.FormatSelectPlugin)}();