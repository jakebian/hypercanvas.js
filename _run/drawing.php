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
		/*background-color:#000;*/
		margin:-10px;
		background-color:#fff;
	}

	
	.body{
		height:200px;
		background-color:#222;
	}
	.info{
		background-color:#555;
		
	}
	.d-select{
		width:250px;
		padding:10px;
		border-radius: 3px;
		background-color:#eee;
		position:absolute;
		left:10px;
		top:10px;
		border:1px solid #ddd;
	}
	.d-select label{
		text-align: center;
		color:#999;
	}
	section{
		margin:0;
		padding:0;
	}
	html body{
		overflow-x:hidden;
		padding:0;
	}
	.demo-thumb{
		/*margin-left:-1px;*/
		text-align: center;
		background-color:#0e0e11;
		padding:0;
	}
	.demos{
		float:left;
		background-color:#0e0e11;
		margin:0;
		margin-top:10px;
	}
	html,body{
		width:100%;
	}
	.demo-thumb img{
		margin:auto;
	}
	.demo-thumb.dark{
		background-color:#080809;
	}

	.desc{
		position:absolute;
		left:0;
		top:0;
		width:100%;
		height:343px;
		background-color:#fff;
		z-index:5;
		opacity: 0;
	}
	.desc:hover{
		cursor:pointer;
		opacity: 1;
		-webkit-transition: all 0.2s ease-in-out;
		-moz-transition: all 0.2s ease-in-out;
		-o-transition: all 0.2s ease-in-out;
		transition: all 0.2s ease-in-out;
	}
	.demo-thumb .desc{
		text-align: left;
		padding:50px;
		padding-top:100px;
	}
	.demo-thumb .desc>h4{
		color:#a0a0a0;
		font-size:2em;
		font-weight:300;
	}
	.shade{
		position:absolute;
		left:0;
		top:0;
		width:100%;
		height:343px;
		background: -moz-linear-gradient(-45deg, rgba(6,6,7,0.65) 0%, rgba(6,6,7,0.63) 1%, rgba(3,3,4,0) 37%, rgba(0,0,0,0) 83%); /* FF3.6+ */
		background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,rgba(6,6,7,0.65)), color-stop(1%,rgba(6,6,7,0.63)), color-stop(37%,rgba(3,3,4,0)), color-stop(83%,rgba(0,0,0,0))); /* Chrome,Safari4+ */
		background: -webkit-linear-gradient(-45deg, rgba(6,6,7,0.65) 0%,rgba(6,6,7,0.63) 1%,rgba(3,3,4,0) 37%,rgba(0,0,0,0) 83%); /* Chrome10+,Safari5.1+ */
		background: -o-linear-gradient(-45deg, rgba(6,6,7,0.65) 0%,rgba(6,6,7,0.63) 1%,rgba(3,3,4,0) 37%,rgba(0,0,0,0) 83%); /* Opera 11.10+ */
		background: -ms-linear-gradient(-45deg, rgba(6,6,7,0.65) 0%,rgba(6,6,7,0.63) 1%,rgba(3,3,4,0) 37%,rgba(0,0,0,0) 83%); /* IE10+ */
		background: linear-gradient(135deg, rgba(6,6,7,0.65) 0%,rgba(6,6,7,0.63) 1%,rgba(3,3,4,0) 37%,rgba(0,0,0,0) 83%); /* W3C */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6060607', endColorstr='#00000000',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	}
	.headline{
		
		position:absolute;
		top:35%;
		width:100%;
		letter-spacing: -1px;
	}
	.headline h1{
		font-family: sans-serif!important;
		font-weight: bold;
		font-size:5em;
		text-align: center;
	}
	.links{
		position: absolute;
		right:20px;
		top:15px;
		background-color:#d8bfac;
		border-radius: 3px;
		margin-right: -1px;
		overflow: hidden;
		border:1px solid #d0b9a2;
	}
	.links a{
		float:left;
		display: block;
		padding:20px 30px;
		color:#fff;
		-webkit-transition: all 0.2s ease-in-out;
		-moz-transition: all 0.2s ease-in-out;
		-o-transition: all 0.2s ease-in-out;
		transition: all 0.2s ease-in-out;
	}
	.links a:hover{
		color:#aaa;
		background-color:#fff;
	}
	.footer{
		position:relative;
		float:left;
		width:100%;
		padding:50px;
		background-color:#080809;
	}
	.footer .links{
		border-color:#000;
		background-color:#0e0e11;
	}
  </style>
</head>

<body>
	<div class="headline">
		<h1>Hypercanvas.js</h1>
	</div>

	<div class="links">
		<a href="https://github.com/jakebian/hypercanvas.js">find on <b>GitHub</b></a>
		<a href="//jakebian.com">crafted by <b>Jake Bian</b></a>
	</div>
  
	<!-- <form class='d-select'>
	    <label for="dimension-select">Select a dimension</label>
	    <input type="range" name="dimension-select" id="dim-select" min="2" max="7" value="4">
	</form> -->
	<section>
		<canvas id="canv" resize></canvas>
	</section>
	<section class='demos'>
		<div class="column small-12 large-4 demo-thumb">
			<a href="" id="sin-func-3d-demo" class="desc">
				<h4><b>DEMO </b> 
				<br> Functions over curved surfaces</h4>
			</a>
			<img src="../img/home/demo1.jpg" alt="">
			<span class="shade"></span>
		</div>
		<div class="column small-12 large-4 demo-thumb">
			<a href="" id="cube-demo" class="desc">
				<h4><b>DEMO </b> 
				<br> Hypercubes</h4>
			</a>
			<img src="../img/home/demo2.jpg" alt="">
			<span class="shade"></span>
		</div>
		<div class="column small-12 large-4 demo-thumb">
			<a href="" id="axes-demo" class="desc">
				<h4><b>DEMO </b> 
				<br> Axes & Spheres</h4>
			</a>
			<img src="../img/home/demo3.jpg" alt="">
			<span class="shade"></span>
		</div>
		<div class="column small-12 large-4 demo-thumb">
			<a href="" id="cylinder-demo" class="desc">
				<h4><b>DEMO </b> 
				<br>Functions on cylinder.</h4>
			</a>
			<img src="../img/home/demo4.jpg" alt="">
			<span class="shade"></span>
		</div>
		<div class="column small-12 large-4 demo-thumb">
			<a href="" id="sin-func-demo" class="desc">
				<h4><b>DEMO </b> 
				<br> 3D function in 4D curved space</h4>
			</a>
			<img src="../img/home/demo5.jpg" alt="">
			<span class="shade"></span>
		</div>
		<div class="column small-12 large-4 demo-thumb dark">
			<a href="//jakebian.com/projects/mdv/" class="desc">
				<h4><b>Link </b> 
				<br> Legacy version, with a physics engine</h4>
			</a>
			<img src="../img/home/demo6.jpg" alt="">
			<span class="shade"></span>
		</div>
	</section>
	<script type="text/paperscript" canvas="canv">	
		hcInit();
		var d = getDemo('sinDemo',DEMO_LIST);
		var demo=d(4);
		var lastVal=4;
		
		$('#cylinder-demo').click(function(e){
			e.preventDefault();
			newDemo('cylinderDemo',3)
		})
		$('#cube-demo').click(function(e){
			e.preventDefault();
			newDemo('cubeDemo',7)
		})
		$('#sin-func-demo').click(function(e){
			e.preventDefault();
			newDemo('sinFunctionDemo',4)
		})
		$('#sin-func-3d-demo').click(function(e){
			e.preventDefault();
			newDemo('sinFunctionDemo',3)
		})
		$('#axes-demo').click(function(e){
			e.preventDefault();
			newDemo('axesDemo',20)
		})
		function newDemo(id,dim){
			project.clear();
			d=getDemo(id,DEMO_LIST);
			demo=d(dim);
			$("html, body").animate({ scrollTop: 0 }, "fast");
			$('.headline h1').text(id);
		}

		// $('#dim-select').change(function(){
		// 	var dim=parseInt($(this).siblings('.ui-slider-track').children().attr('aria-valuenow'));
		// 	if(lastVal!=dim){
		// 		lastVal=dim;
		// 		project.clear();
		// 		demo = new d(dim);
		// 	}
		// });
		function onFrame(event) {
			demo.onFrame(event);
		}
		function onMouseMove(event) {
			demo.onMouseMove(event);
		}

	</script>
	<section class="footer">
		<div class="links">
			<a href="https://github.com/jakebian/hypercanvas.js">find on <b>GitHub</b></a>
			<a href="//jakebian.com">crafted by <b>Jake Bian</b></a>
		</div>
		<span>
			Copyright © 2014
		</span>
	</section>
</body>
</html>