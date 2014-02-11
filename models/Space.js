function Space(dim){
	/**
	 * dimensions of the space
	 * @type {Integer}
	 */
	this.dim=dim;

	/**
	 * Sum of 2 vectors u and v
	 * @param  {Vector} u 
	 * @param  {Vector} v
	 * @return {Vector}
	 */
	this.sum=function(u,v){}

	/**
	 * Inner product of 2 vectors u and v
	 * @param  {Vector} u 
	 * @param  {Vector} v
	 * @return {float}
	 */
	this.inner=function(u,v){},

	/**
	 * Returns scalar multiplication of vector v by scalar k
	 * @param  {Vector} v 
	 * @param  {float} k
	 * @return {Vector}
	 */
	this.mult=function(v,k){},

	/**
	 * Additive inverse of vector v
	 * @param  {Vector} v 
	 * @return {Vector}
	 */
	this.inverse=function(v){},

	/**
	 * Norm of vector v
	 * @param  {Vector} v 
	 * @return {float}
	 */
	this.norm=function(v){}

	/**
	 * Applies rotation R to angle v
	 * @param  {Vector} v 
	 * @param  {Rotation} r
	 * @return {float}
	 */
	this.rotate=function(v,R){}

	/**
	 * Returns a Vector at given coord, in this space.
	 * @param  {Array} coords 
	 * @return {Vector}
	 */
	this.newVector=function(coords){}

	/**
	 * Returns a list of vectors at given coords, in this space.
	 * @param  {Array} coords 
	 * @return {Vector}
	 */
	this.newVectors=function(coordsList){}

	/**
	 * returns the nth basis vector
	 * @param  {Integer} n 
	 * @return {Vector}  
	 */
	this.basis=function(n){}

	/**
	 * returns the origin
	 * @return {Vector}  
	 */
	this.origin=function(){}
}