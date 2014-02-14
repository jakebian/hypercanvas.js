function SinEuc(dim,freq,phase){
  var map= new EucMap();
  map.toEucCoords=function(coords){
    var result=coords.slice();
    result[dim]=200;
    for(var i=0; i<dim; i++){
      result[dim]+=100*(Math.sin(freq*result[i]*2*Math.PI/360+phase));
    }
    return result;
  }

  return map;
}