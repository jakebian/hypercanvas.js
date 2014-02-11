function Canvas(){
	this.init=function(id){
		paper.install(window);
		paper.setup(id);
	}

	/**
	 * Draws all elements as captured by a camera
	 * @param  {Camera} camera 
	 * @return {Canvas} 
	 */
	this.drawCamera=function(camera){
		// var myCircle = new Path.Circle(new Point(5,5), 15);
		// myCircle.fillColor = 'black';
		camera.update();
		// view.draw();
		return this;
	}

}