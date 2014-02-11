// A rotation in a plane specified by 2 basis vectors. 
// All rotations can be constructed as linear combinations of these, 
// by Euler's rotation theorem. 
function Rotation(dims, angle){
	/**
	 * Indices specifying the plane of rotation
	 * @type {Array} array of 2 floats
	 */
	this.dims=dims;

	/**
	 * angle, between 0 and 2 pi
	 * @type {float}
	 */
	this.angle=angle;
}