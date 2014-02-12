function CubeDemo(dim){
	var dim=dim;

	var space= new EucSpace(dim);	  	
  	var stage= new Stage(space);

  	res =1
  	var grid=new SquareGrid(dim,400,res);
  	var map=new SinEuc(dim,1,0);
  	stage.newRopes(grid.edges(),'#999'); 

  	var camcoord=[];
  	for(var i=0; i<dim;i++){
  		camcoord[i]=200;
  	}
  	var camPos=space.newVector(camcoord);
  	var cam= new Camera(stage,camPos,emptyOrientation(dim));	
  	var phase=0;

  	var delta=0.02;
  	this.onFrame=function(event) {
  		cam.rotateAll(delta);
  		cam.update();
  	}
  	this.onMouseMove=function(event) {
      delta=event.point.x*0.00005;
  	}
}