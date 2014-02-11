function emptyOrientation(dim){
	orientation=[];
	for(var i=0;i<dim; i++){
		for(var j=i+1; j<dim;j++){
			orientation[orientation.length]={dims:[i,j],angle:0};
		}
	}
	return orientation;
}