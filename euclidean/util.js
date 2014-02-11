function eucRotate(coord,R){
	var result=coord.slice();
	var d1=R.dims[0];
	var d2=R.dims[1];

	var u=coord[d1];
	var v=coord[d2];

	var A=R.angle;

	var cosA=Math.cos(A);
	var sinA=Math.sin(A);

	result[d1]=u*cosA-v*sinA;
	result[d2]=u*sinA+v*cosA;

	return result;
}

function eucOrient(coord,orientation){
	var result=coord.slice();
	for(var i=0; i<orientation.length; i++){
		result=eucRotate(result,orientation[i]);
	}
	return result;
}