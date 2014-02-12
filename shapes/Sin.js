function Sin(dim,freq,phase){
	var vertices=[];
	var edges=[];
	var grid = new Grid(2,[800,800],[8,8]);
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