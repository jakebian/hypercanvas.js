function EucSpace(dim){
	this.dim=dim;
	this.sum=function(u,v){
		return new Vector(coordSum(u.coords(),v.coords()),this);
	},
	this.inner=function(u,v){
		return coordPairProduct(u.coords(),v.coords());
	},
	this.mult=function(k,v){
		return new Vector(coordMultAll(k,v.coords()),this);
	},
	this.inverse=function(v){
		return new Vector(coordMultAll(-1,v.coords()),this);
	}
	this.norm=function(v){
		return Math.pow(coordPairProduct(v.coords(),v.coords()),0.5);
	}
	this.rotate=function(v,R){
		return new Vector(eucRotate(v.coords(),R),this);
	}
	this.orient=function(v,O){
		return new Vector(eucOrient(v.coords(),O),this);
	}
	this.newVector=function(coords){
		return new Vector(coords,this);
	}
	this.basis=function(n){
		return new Vector(singleCoord(n,this.dim),this);
	}
	this.origin=function(){
		return new Vector(nullCoord(this.dim),this);
	}
	this.newVectors=function(coordsList){
		var s=this;
		return coordsList.map(function(coords){
			return new Vector(coords,s);
		})
	}
}