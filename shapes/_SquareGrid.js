function SquareGrid(dim,range,res){
	var ra= new Array();
	var re= new Array();
	for(var i=0; i<dim; i++){
		ra[i]=range;
		re[i]=res;
	}
	return new Grid(dim,ra,re);
}