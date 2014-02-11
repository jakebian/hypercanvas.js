function Stage(space){
	var space=space;
	/**
	 * Collection of points
	 * @type {Array}
	 */
	var dotList=[];

	/**
	 * Collection of lines
	 * @type {Array}
	 */
	var ropeList=[];

	/**
	 * Adds Dot to the stage
	 * @param {Dot} dot
	 */
	this.addDot=function(dot){
		dotList[dotList.length]=dot;
	}

	/**
	 * Creates new Dot and add to the stage
	 * @param {Dot} dot
	 */
	this.newDot=function(coords,color){
		dotList[dotList.length]=new Dot(space.newVector(coords),color);
	}

	/**
	 * Creates many new Dots and add to the stage
	 * @param {Dot} dot
	 */
	this.newDots=function(coordsList,color){
		dotList=dotList.concat(coordsList.map(function(coords){
			return new Dot(space.newVector(coords),color)}));
	}

	this.newRope=function(segments,color){
		ropeList[ropeList.length]= new Rope(space.newVectors(segments),color);
	}

	this.newRopes=function(segmentsList,color){
		ropeList=ropeList.concat(segmentsList.map(function(segments){
			return new Rope(space.newVectors(segments),color);
		}));
	}

	/**
	 * returns list of all dots on stage
	 * @return {Array}
	 */
	this.dots=function(){
		return dotList;
	}
	this.ropes=function(){
		return ropeList;
	}
	this.addRope=function(rope){
		ropeList[ropeList.length]=rope;
	}

	this.addRopes=function(ropes){
		ropeList=ropeList.concat(ropes);
	}
	/**
	 * An straight line to the nth basis vector
	 * @param  {float} n 
	 * @return {Line} 
	 */
	function getAxis(n){
		return new Rope([space.origin(),space.basis(n).mult(500)],DEFAULT_COLOR);
	}

	function getAxes(){
		var axes=[];
		for(var i=0; i<space.dim;i++){
			axes[i]=getAxis(i);
		}
		return axes;
	}

	this.addAxes=function(){
		this.addRopes(getAxes());
	}

}