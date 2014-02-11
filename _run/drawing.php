<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Drawing test</title>
  
  <?php 
  require 'dependencies.php';
 ?>
  <style>
	body{
  		padding:0;
  		margin:0;
  	}
	#canv{
		background-color:#fff;
		margin:-10px;
	}
  </style>
</head>

<body>
	<canvas id="canv" resize></canvas>
	<script type="text/paperscript" canvas="canv">
		paper.install(window);
		view.center=[0,0];

		var dim=4;

		var space= new EucSpace(dim);	  	
	  	var stage= new Stage(space);

	  	stage.addAxes();
	  	var grid=new Grid(dim-1,400,100);
	  	var map=new SinEuc(dim,1,0);
	  	stage.newRopes(map.toEucLinesList(grid.edges()));  	
	  	var sin= new Sin(dim-1,5,0);
	  	stage.newRopes(map.toEucLinesList(sin.edges()),'red');

	  	var camcoord=[200,200,200,200,200];
	  	var camPos=space.newVector(camcoord);
	  	var cam= new Camera(stage,camPos,emptyOrientation(dim));	
	  	var phase=0;
		function onFrame(event) {

			cam.rotateAll(0.02);
			cam.update();
		}

	</script>
</body>
</html>