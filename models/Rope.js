function Rope(segments,color){

	/**
	 * Starting point of the line
	 * @type {Array}
	 */
	this.segments=segments,

	/**
	 * Color of the line
	 * @type {Stringh
	 * }
	 */
	this.color=(typeof color=='string')?color:DEFAULT_COLOR;
}