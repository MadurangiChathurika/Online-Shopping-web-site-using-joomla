<?php
/**
* @subpackage  mx_joomla148 Template
*/

defined('_JEXEC') or die;

$app = JFactory::getApplication();
$doc = JFactory::getDocument();//define path
$base_url = $this->baseurl;
$tpl_name = $this->template;

$caption         = $this->params->get ('caption');
$menu            = $this->params->get ('menu');
$slider	     = $this->params->get('slider');
$slides	     = $this->params->get('slides');
$container_height = $this->params->get('container_height');
$sliders_thumb1 	= $this->params->get('sliders_thumb1', '' );
$sliders_thumb2 	= $this->params->get('sliders_thumb2', '' );
$sliders_thumb3 	= $this->params->get('sliders_thumb3', '' );
$sliders_thumb4 	= $this->params->get('sliders_thumb4', '' );
$sliders_thumb5 	= $this->params->get('sliders_thumb5', '' );
$sliders_thumb6 	= $this->params->get('sliders_thumb6', '' );
$sliders_texts1 	= $this->params->get('sliders_texts1', '' );
$sliders_texts2 	= $this->params->get('sliders_texts2', '' );
$sliders_texts3 	= $this->params->get('sliders_texts3', '' );
$sliders_texts4 	= $this->params->get('sliders_texts4', '' );
$sliders_texts5 	= $this->params->get('sliders_texts5', '' );
$sliders_texts6 	= $this->params->get('sliders_texts6', '' );
$sliders_tex1 	= $this->params->get('sliders_tex1', '' );
$sliders_tex2 	= $this->params->get('sliders_tex2', '' );
$sliders_tex3 	= $this->params->get('sliders_tex3', '' );
$sliders_tex4 	= $this->params->get('sliders_tex4', '' );
$sliders_tex5 	= $this->params->get('sliders_tex5', '' );
$sliders_tex6 	= $this->params->get('sliders_tex6', '' );
$sliders_text1 	= $this->params->get('sliders_text1', '' );
$sliders_text2 	= $this->params->get('sliders_text2', '' );
$sliders_text3 	= $this->params->get('sliders_text3', '' );
$sliders_text4 	= $this->params->get('sliders_text4', '' );
$sliders_text5 	= $this->params->get('sliders_text5', '' );
$sliders_text6 	= $this->params->get('sliders_text6', '' );


(($this->countModules('slider') && $slides == 2) || ($slides == 1) ?

$tcParams .= '<div id="elslide"><div class="container">
<div id="elasticslideshow" class="ei-slider" style="height: 400px">
<ul class="ei-slider-large">'
.($sliders_thumb1 ? '<li class="slide_'.$sliders_texts1.'"><img src="'.$sliders_thumb1.'"/>' : '')
.($sliders_text1 ? '<a href="'.$sliders_text1.'"  data-toggle="tooltip" title="read more">' : '').
'<div class="ei-title">'
.($sliders_texts1 ? '<h2>'.$sliders_texts1.'</h2>' : '') 
.($sliders_tex1 ? '<h3>'.$sliders_tex1.'</h3>' : '').
'</div>'
.($sliders_text1 ? '</a>' : '')
.($sliders_thumb1 ? '</li>' : '')

.($sliders_thumb2 ? '<li class="slide_'.$sliders_texts2.'"><img src="'.$sliders_thumb2.'"/>' : '')
.($sliders_text2 ? '<a href="'.$sliders_text2.'"  data-toggle="tooltip" title="read more">' : '').
'<div class="ei-title">'
.($sliders_texts2 ? '<h2>'.$sliders_texts2.'</h2>' : '') 
.($sliders_tex2 ? '<h3>'.$sliders_tex2.'</h3>' : '').
'</div>'
.($sliders_text2 ? '</a>' : '')
.($sliders_thumb2 ? '</li>' : '')

.($sliders_thumb3 ? '<li class="slide_'.$sliders_texts3.'"><img src="'.$sliders_thumb3.'"/>' : '')
.($sliders_text3 ? '<a href="'.$sliders_text3.'"  data-toggle="tooltip" title="read more">' : '').
'<div class="ei-title">'
.($sliders_texts3 ? '<h2>'.$sliders_texts3.'</h2>' : '') 
.($sliders_tex3 ? '<h3>'.$sliders_tex3.'</h3>' : '').
'</div>'
.($sliders_text3 ? '</a>' : '')
.($sliders_thumb3 ? '</li>' : '')

.($sliders_thumb4 ? '<li class="slide_'.$sliders_texts4.'"><img src="'.$sliders_thumb4.'"/>' : '')
.($sliders_text4 ? '<a href="'.$sliders_text4.'"  data-toggle="tooltip" title="read more">' : '').
'<div class="ei-title">'
.($sliders_texts4 ? '<h2>'.$sliders_texts4.'</h2>' : '') 
.($sliders_tex4 ? '<h3>'.$sliders_tex4.'</h3>' : '').
'</div>'
.($sliders_text4 ? '</a>' : '')
.($sliders_thumb4 ? '</li>' : '')

.($sliders_thumb5 ? '<li class="slide_'.$sliders_texts5.'"><img src="'.$sliders_thumb5.'"/>' : '')
.($sliders_text5 ? '<a href="'.$sliders_text5.'"  data-toggle="tooltip" title="read more">' : '').
'<div class="ei-title">'
.($sliders_texts5 ? '<h2>'.$sliders_texts5.'</h2>' : '') 
.($sliders_tex5 ? '<h3>'.$sliders_tex5.'</h3>' : '').
'</div>'
.($sliders_text5 ? '</a>' : '')
.($sliders_thumb5 ? '</li>' : '').


'</ul>
<div class="ei_slider_thumbs">
<ul class="ei-slider-thumbs">
<li class="ei-slider-element"></li>'	
.($sliders_thumb1 ? '<li><a href="#"></a><img src="'.$sliders_thumb1.'"/></li>' : '')
.($sliders_thumb2 ? '<li><a href="#"></a><img src="'.$sliders_thumb2.'"/></li>' : '')
.($sliders_thumb3 ? '<li><a href="#"></a><img src="'.$sliders_thumb3.'"/></li>' : '')
.($sliders_thumb4 ? '<li><a href="#"></a><img src="'.$sliders_thumb4.'"/></li>' : '')
.($sliders_thumb5 ? '<li><a href="#"></a><img src="'.$sliders_thumb5.'"/></li>' : '').
'</ul> 
</div>' : '')

?>      