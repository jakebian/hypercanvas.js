function Camera(stage,pos,angle){
	/**
	 * The stage which the camera will capture
	 * @type {[type]}
	 */
	var stage=stage;

	/**
	 * position of camera in the given space
	 * @type {Vector}
	 */
	var pos=pos;

	/**
	 * Array of Rotations specifying orientation of camera
	 * @type {Array}
	 */
	var angle=angle;
	function theta(){
		return inverseAngle(angle)
	};

	this.pos=function(){
		return pos;
	}
	this.setPos=function (p){
		pos=p;
	}

	this.angle=function(){
		return angle;
	}
	this.setAngle=function(a){
		angle=a;
	}
	function rotationInverse(R){
		return {dims:R.dims,angle:-R.angle};
	}
	/**
	 * gets the inverse of an angle, which is a collection of rotations
	 * @param  {Array} angle 
	 * @return {Array}       
	 */
	function inverseAngle(angle){
		return angle.map(function (R) {return rotationInverse(R)});
	}

	/**
	 * The given array of dots translated such that the camera is at the origin
	 * @param  {Array} dots 
	 * @return {Array}
	 */
	this.translateDots=function(dots){
		var result=[];
		for(var i=0; i<dots.length; i++){
			result[i]=this.translateDot(dots[i]);
		}
		return result;
	}

	this.translateRopes=function(ropes){
		var result=[];
		for(var i=0; i<ropes.length; i++){
			result[i]=this.translateRope(ropes[i]);
		}
		return result;
	}

	this.translateDot=function(dot){
		return new Dot(this.translateVect(dot.pos()),
							dot.color);
	}

	this.translateRope=function(rope){
		var cam=this;
		return new Rope(rope.segments.map(function (s) 
			{return cam.translateVect(s)}),rope.color);
	}

	this.translateVect=function(v){
		return v.plus(pos.inverse());
	}

	/**
	 * The given array of dots rotated by additive inverse of the angle of the camera. 
	 * @param  {Array} dots 
	 * @return {Array}
	 */
	this.rotateDots=function(dots){
		var result=[];
		for(var i=0; i<dots.length; i++){
			result[i]=this.rotateDot(dots[i]);
		}
		return result;
	}

	this.rotateRopes=function(ropes){
		var result=[];
		for(var i=0; i<ropes.length; i++){
			result[i]=this.rotateRope(ropes[i]);
		}
		return result;
	}



	this.rotateDot=function(dot){
		return new Dot(this.orientVect(dot.pos()),
							dot.color);
	}

	this.orientVect=function(v){
		return v.orient(theta());
	}

	this.rotateRope=function(rope){
		var cam=this;
		return new Rope(rope.segments.map(function (R) 
		{return cam.orientVect(R)}),rope.color);

	}

	/**
	 * Returns all dots on the stage after they've translated and oriented
	 * according to camera's position and angle
	 * @return {Array}
	 */
	this.dots=function(){
		return this.rotateDots(this.translateDots(stage.dots()));
	}


	this.ropes=function(){
		return this.rotateRopes(this.translateRopes(stage.ropes()));
	}

	/**
	 * A camera Image contains the explicit objects (paper js) for drawing elements captured
	 * by the camera
	 * @type {CameraImage}
	 */
	var view= new CameraImage(this);
	this.init=function(){
		view.init();
	}
	this.update=function(){
		view.update();
	}
	this.rotateAll=function(amount){
		for(var i=0; i<angle.length;i++){
			angle[i].angle+=amount;
		}
	}
	this.init();
}