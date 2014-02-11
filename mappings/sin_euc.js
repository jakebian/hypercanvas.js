function SinEuc(dim,freq,phase){
	this.toEucCoordsList=function(coordsList){
		var map=this;
  		return coordsList.map(function(coords){
  			return map.toEucCoords(coords);
  		});
  	}
  	this.toEucCoords=function(coords){
  		var result=coords.slice();
  		result[dim-1]=200;
  		for(var i=0; i<dim-1; i++){
  			result[dim-1]+=100*(Math.sin(freq*result[i]*2*Math.PI/360+phase));
  		}
  		return result;
  	}

  	this.toEucLinesList=function(lineList){
  		var map=this;
  		return lineList.map(function(line){
  			return map.toEucLine(line);
  		});
  	}
  	this.toEucLine=function(line){
  		var map=this;
  		return line.map(function(coords){
  			return map.toEucCoords(coords);
  		})
  	}
}