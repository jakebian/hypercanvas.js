function CameraImage(camera){
	var camera = camera;
	var dots=[];
	var ropes=[];
	/**
	 * Creates the Paths for each dot and draws
	 * @return {CameraImage}
	 */
	this.init=function(){
		initDots();
		initRopes();
		return this;
	}

	var initDots=function(){
		var camDots=camera.dots();
		for(var i=0; i<camDots.length; i++){
			dots[i]=initDot(camDots[i])
		}
	}

	function initDot(dot){
		var p=dot.xy();
		var d=new Path.Circle(new Point(p.x, p.y), DOT_RADIUS);
		d.fillColor=dot.color;
		d.opacity=0.5;
		return d;
	}

	function initRope(rope){
		var segments = getSegments(rope); 
		var path = new Path(segments);
		path.strokeColor = rope.color;
		// path.selected=true;
		return path;
	}

	function getSegments(rope){
		return rope.segments.map(getSegment);
	}

	function getSegment(c){
		return new Point(c.xy().x,c.xy().y);
	}

	var initRopes=function(){
		var camRopes=camera.ropes();
		for(var i=0; i<camRopes.length; i++){
			ropes[i]=initRope(camRopes[i])
		}
	}

	/**
	 * Updates the paths for each item based on current state of camera.
	 * @return {[type]} [description]
	 */
	this.update=function(){
		updateDots();
		updateRopes();
	}

	function updateDots(){
		var camDots=camera.dots();
		for(var i=0; i<camDots.length; i++){
			var p=camDots[i].xy();
			var p0=dots[i].position;
			var delta=new Point(p.x-p0.x, p.y-p0.y);
			dots[i].translate(delta);
		}
		return this;
	}

	function updateRopes(){
		var camRopes=camera.ropes();
		for(var i=0; i<camRopes.length; i++){
			var segments=ropes[i].segments;
			var camRope=camRopes[i].segments;
			for(var j=0; j<camRope.length;j++){
				segments[j].point=getSegment(camRope[j]);
			}
			ropes[i].smooth();
		}
		return this;
	}


	this.dots=function(){
		return dots;
	}

	this.rope=function(){
		return ropes;
	}
}