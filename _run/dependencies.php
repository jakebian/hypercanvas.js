<?php

function includePaperJs($filename){
	$CANVAS_ID='canv';
	echo '<script type="text/paperscript" canvas="'.$CANVAS_ID.'" src="'.$filename.'"></script>'; 
}
function includeCSS($filename){
	echo '<link rel="stylesheet" href="'.$filename.'">';
}

function includeCSSFolder($folder){
	foreach (glob($folder."/*.css") as $filename)
	{
	    includeCSS($filename); 
	}
}

function includeJs($filename){
	echo '<script src="'.$filename.'"></script>'; 
}
function includeJsFolder($folder){
	foreach (glob($folder."/*.js") as $filename)
	{
	    includeJs($filename); 
	}
}
function includePaperJsFolder($folder){
	foreach (glob($folder."/*.js") as $filename)
	{
	    includePaperJs($filename); 
	}
}

includeCSSFolder("../res");
includeJsFolder("../res");
includeJsFolder("../start");
includeJsFolder("../util");
includeJsFolder("../models");
includeJsFolder("../euclidean");
includeJsFolder("../mappings");
includeJsFolder("../shapes");
includeJsFolder("../drawing");
includeJsFolder("../demos");
