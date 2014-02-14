function SinFunctionDemo(dim){
	var dim=dim;

	var space= new EucSpace(dim);	  	
  	var stage= new Stage(space);

  	// stage.addAxes();

  	var res=7;
  	if(dim==4){
  		res = 5;
  	}
  	if(dim>4){
  		res=3;
  	}
  	var grid=new SquareGrid(dim-1,400,res);
  	var map=new SinEuc(dim-1,1,0);
  	stage.newRopes(map.toEucLinesList(grid.edges()),'#999'); 

  	var func=new SquareGrid(dim-2,400,res);
  	var funcMap=new SinEuc(dim-2,1,0);
  	stage.newRopes(map.toEucLinesList(funcMap.toEucLinesList(func.edges())),'red'); 
  	// var sin= new Sin(2,2,0);
  	// stage.newRopes(map.toEucLinesList(map.fromEucLinesList(sin.edges())),'red');

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