function CylinderDemo(dim){
	var dim=3;

	  var space= new EucSpace(dim);	  	
  	var stage= new Stage(space);

  	// stage.addAxes();

  	var grid=new Grid(2,[Math.PI*2,400],[10,5]);
  	var map=new CylinderEuc(200);
  	stage.newRopes(map.toEucLinesList(grid.edges()),'#999'); 

    var funcGrid=new SquareGrid(1,500,50);
    var sin=new SinEuc(1,5,0);

    stage.newRopes(map.toEucLinesList(map.fromEucLinesList(sin.toEucLinesList(funcGrid.edges()))),'red'); 
  	var camcoord=[];
  	for(var i=0; i<2;i++){
  		camcoord[i]=0;
  	}
    camcoord[2]=200;
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