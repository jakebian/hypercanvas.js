function Grid(dim,range,interval){
	/**
	 * Width/dimension of the grid
	 * @type {Number}
	 */
	var range=range;

	/**
	 * Spacing between grid points
	 * @type {Number}
	 */
	var interval=interval-1;

	/**
	 * Number of points per dimension
	 * @type {[type]}
	 */
	var length=Math.ceil(range/interval);

	/**
	 * Given a point and dimension, 
	 * returns list of all grid coordinates which 
	 * share the first d components with pt.
	 * @param  {Array} pt 
	 * @param  {float} d
	 * @return {Array}
	 */
	function vertices(pt,d){
		var list=[];
		for(var i=0; i<length;i++){
			if(pt[d]!=i*interval||d==0){
				pt[d]=i*interval;
				list[list.length]=pt.slice();
			}
			if(d<dim-1){
				list=list.concat(vertices(pt.slice(),d+1));
			}
		}

		return list;
	}

	/**
	 * Given a point, produces all lines from that point.
	 * @param  {Array} pt
	 * @return {Array} 
	 */
	function linesFrom(pt){
		var lines=[];
		for(var d=0; d<dim;d++){
			if(pt[d]==0){
			  	var segs=[];
			  	for(var i=0; i<length;i++){
			  		var p=pt.slice(0);
			  		p[d]=i*interval;
			  		segs[i]=p;
			  	}
			  	lines[lines.length]=segs;
	  		}
		}
		return lines;
	}

	/**
	 * Returns list of all vertices of the grid
	 * @return {Array} 
	 */
	this.vertices=function(){
		return vertices(nullCoord(dim),0);
	}

	/**
	 * Returns list of all lines of the grid
	 * @return {Array}
	 */
	this.edges=function(){
		var lines=[];
		var verts=this.vertices();
		for(var i=0; i<verts.length;i++){
			if(onBound(verts[i])){
				lines=lines.concat(linesFrom(verts[i]));
			}
		}
		return lines;
	}
}