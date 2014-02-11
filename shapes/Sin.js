function Sin(dim,freq,phase){
	var vertices=[];
	var edges=[];
	var grid = new Grid(dim-1,400,50);
	this.init=function(){		
		this.update();
	}
	this.changePhase=function(p){
		phase=p;
	}

	this.vertices=function(){
		return vertices;
	}
	this.update=function(){
		var map=new SinEuc(dim,freq,phase);
		vertices=map.toEucCoordsList(grid.vertices());
		edges=map.toEucLinesList(grid.edges());
	}
	this.edges=function(){
		return edges;
	}
	this.init();
}