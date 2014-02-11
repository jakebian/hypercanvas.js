function Vector(coords,space){

	var coords=coords;

	/**
	 * The vector space to which this vector belongs
	 * @type {Space}
	 */
	var space=space;

	/**
	 * Representation in some standard basis
	 * @return {Array}
	 */
	this.coords=function(){
		return coords;
	}
	/**
	 * Addition with vector v
	 * @param  {Vector} v
	 * @return {Vector}
	 */
	this.plus=function(v){
		return space.sum(this,v)
	};

	/**
	 * Dot product with vector v
	 * @param  {Vector} v
	 * @return {Vector}
	 */
	this.dot=function(v){
		return space.inner(this,v)
	};

	/**
	 * Scalar multiplication by k
	 * @param  {float} k
	 * @return {Vector}   
	 */
	this.mult=function(k){
		return space.mult(k,this)
	}

	/**
	 * returns norm
	 * @return {float}
	 */
	this.norm=function(){
		return space.norm(this)
	}

	/**
	 * returns additive inverse
	 * @return {Vector}
	 */
	this.inverse=function(){
		return space.inverse(this)
	}

	/**
	 * returns the unit vector
	 * @param  {Vector} v 
	 * @return {Vector}
	 */
	this.unit= function(v){
		if(this.norm!=0){
			return space.mult(this,1/(this.norm()));
		}
		return 0;
	};

	/**
	 * returns the vector after a rotation
	 * @param  {Rotation} R
	 * @return {Vector}
	 */
	this.rotate= function(R){
		return space.rotate(this,R);
	};

	/**
	 * returns the vector after a array of rotations
	 * @param  {Array} array of Rotations
	 * @return {Vector}
	 */
	this.orient= function(R){
		return space.orient(this,R);
	};

	/**
	 * returns a shallow copy of this vector
	 * @return {Vector}
	 */
	this.clone=function(){
		return clone(this);
	}

	/**
	 * [xy description]
	 * @return {[type]} [description]
	 */
	this.xy=function(){
		return {x:coords[0],
				y:coords[1]};
	}
}
