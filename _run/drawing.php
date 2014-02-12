<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Drawing test</title>
  <link rel="stylesheet" href="">
  <?php 
  require 'dependencies.php';
 ?>
  <style>
	body{
  		padding:0;
  		margin:0;
  	}
	#canv{
		background-color:#000;
		margin:-10px;
	}
  </style>
</head>

<body>
	<form>
	    <label for="dimension-select">Select a dimension</label>
	    <input type="range" name="dimension-select" id="dim-select" min="2" max="7" value="4">
	</form>
	<canvas id="canv" resize></canvas>
	<script type="text/paperscript" canvas="canv">		
		hcInit();

		var demo = new SinDemo(4);
		var lastVal=3;
		$('#dim-select').change(function(){
			var dim=parseInt($(this).siblings('.ui-slider-track').children().attr('aria-valuenow'));
			if(lastVal!=dim){
				lastVal=dim;
				project.clear();
				demo = new SinDemo(dim);
			}
			// 
		});
		function onFrame(event) {
			demo.onFrame(event);
		}
		function onMouseMove(event) {
			demo.onMouseMove(event);
		}
		$( document ).on( "mobileinit", function() {});

	</script>
</body>
</html>