hypercanvas.js
==============
> Hypercube.js is a graphics engine for arbitrary dimensions.


Features
--------
- Construct and display geometry in Euclidean spaces of any dimension
- Construct and visualize any curved system through a bijection to Euclidean space
- Graph functions and construct geometric objects in curved spaces.
- Navigate through higher dimensional spaces using a camera object
- Animate objects in any coordinate system. 
- Handle mouse and keyboard interactions with Paper.js. 

Dependencies
------------
- All graphics are rendered with the [paper.js] (http://paperjs.org/) engine. 

Usage
-----
### Getting Started ###
Include Paper.js and Hypercanvas.js:

    <script src="../res/paper.js"></script>
    <script src="hypercanvas.min.js"></script>

### Simple Example ###
The following example creates a stage, a camera, and 3 spheres:
	  
  	  var dim=5;
  	  var space= new EucSpace(dim);	  	
    	var stage= new Stage(space);
  
    	stage.addAxes();
  
      coord1=nullCoord(dim);
      coord2=nullCoord(dim);
      coord3=nullCoord(dim);
      for(var i=0; i<(dim-1)/2;i++){
        coord2[2*i]=60;
      }
      for(var i=0; i<(dim-2)/2;i++){
        coord3[2*i+1]=50;
      }

      var dots=[coord1,coord2,coord3];
    	var shape=new SimpleShape(dim);
    	stage.newDots(dots,'red');

    	var camcoord=[];
    	for(var i=0; i<dim;i++){
    		camcoord[i]=10;
    	}
    	var camPos=space.newVector(camcoord);
    	var cam= new Camera(stage,camPos,emptyOrientation(dim));
  	
### Animation ###
Use Paper.js for animation, for example:

  	  function onFrame(event) {
        cam.rotateAll(delta);
        cam.update();
      }
      function onMouseMove(event) {
        delta=event.point.x*0.00005;
      }
