//Dot is a point to be drawn, specified by a vector 

function Dot(pos,color){
	/**
	 * Position of the point
	 * @type {Vector}
	 */
	var pos=pos;

	/**
	 * Returns the position vector of the dot
	 * @return {Vector}
	 */
	this.pos=function(){
		return pos;
	}
	
	/**
	 * coordinates of projection onto the plane formed by 1st 2 components
	 * @return {object} [description]
	 */
	this.xy=function(){
		var coords=pos.coords();
		return {x:coords[0],
				y:coords[1]};
	}

	/**
	 * coordinates of projection onto any 2 vectors on the plane, only meaningful if e1 and e2 are lin. indep.
	 * @param  {Vector} e1 
	 * @param  {Vector} e2
	 * @return {object} 
	 */
	this.twoProj=function(e1,e2){
		return {x:pos.dot(e1),
				y:pos.dot(e2)};
	}


	/**
	 * HEX color of the point
	 * @type {String}
	 */
	this.color=(typeof color=='string')?color:DEFAULT_COLOR;
}