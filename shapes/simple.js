function SimpleShape(dim){
	var coord1,coord2,coord3;	

	this.init=function(){
		coord1=nullCoord(dim);
		coord2=nullCoord(dim);
		coord3=nullCoord(dim);
		for(var i=0; i<(dim-1)/2;i++){
			coord2[2*i]=60;
		}
		for(var i=0; i<(dim-2)/2;i++){
			coord3[2*i+1]=50;
		}
	}

	this.vertices=function(){
		return [coord1,coord2,coord3];
	}

	this.edges=function(){
		return [[coord1,coord2],[coord1,coord3]];
	}
	this.init();
}