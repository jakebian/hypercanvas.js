function CylinderEuc(r){
	var map= new EucMap();
	map.toEucCoords=function(coords){
		var result=coords.slice();
		result[0]=r*Math.cos(coords[1]);
    result[1]=r*Math.sin(coords[1]);
    result[2]=coords[2]
		return result;
	}
   var count=0
   var period=Math.PI/2;
  map.fromEucCoords=function(coords){
    var result=coords.slice();
    result[0]=r;
    if(coords[0]!=0){
       result[1]=2*Math.atan(coords[0]/Math.sqrt(Math.abs(Math.pow(r,2)-Math.pow(coords[1],2))));
    }
    else{
      count++;
      result[1]=period;
    }
   
    result[2]=coords[1];
    return result;
  }
  map.EucEucCoords=function(coords){
    return map.toEucCoords(map.fromEucCoords(coords));
  }
	return map;
}