function EucMap(){
	 this.toEucCoordsList=function(coordsList){
		var map=this;
  		return coordsList.map(function(coords){
  			return map.toEucCoords(coords);
  		});
  	}
  	this.toEucCoords=function(coords){
  		return coords;
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

    this.fromEucCoords=function(coords){
      return coords;
    }

    this.fromEucLinesList=function(lineList){
      var map=this;
      return lineList.map(function(line){
        return map.fromEucLine(line);
      });
    }
    this.fromEucLine=function(line){
      var map=this;
      return line.map(function(coords){
        return map.fromEucCoords(coords);
      })
    }
    this.EucEucCoords=function(coords){
      return coords;
    }
    

}