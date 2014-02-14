function CylinderEuc(r){
	var map= new EucMap();
	map.toEucCoords=function(coords){
		var result=coords.slice();
		result[0]=r*Math.cos(coords[0]);
    result[1]=r*Math.sin(coords[0]);
    result[2]=coords[1]
		return result;
	}
  var period=Math.PI*4;
  var count=0;
  function getCount(a,b){
    var count=0;
    while(a<b){
      a+=a;
      count++;
    }
    return count;
  }
  var lastR=0;
  var lastCount=0;
  var lastResult=0;
  map.fromEucCoords=function(coords){
    var result=coords.slice();
    var count=getCount(r,result[0]);

   if(lastCount!=count){
    lastCount=count;
    lastR=lastResult;
   }

    c0=coords[0]-count*r;
    lastResult=count*4.70+Math.atan(rminus(c0)/c0);
    result[0]=lastResult; 
    return result;
  }
  function rminus(num){
    return Math.sqrt(Math.abs(r*r-num*num));
  }
  map.EucEucCoords=function(coords){
    return map.toEucCoords(map.fromEucCoords(coords));
  }
	return map;
}