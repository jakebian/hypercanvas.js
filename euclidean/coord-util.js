function coordSum(a,b){
	var result=Array();
	var shorter,longer;

	if(a.length>b.length){
		shorter=b;
		longer=a;
	}
	else{
		shorter=a;
		longer=b;
	}
	
	for(var i=0; i<shorter.length; i++){
		result[i]=a[i]+b[i];
	}
	for(var i=shorter.length;i<longer.length;i++){
		result[i]=longer[i];
	}
	return result;
}

function coordPairProduct(a,b){
	var result=Array();
	if(a.length>b.length){
		shorter=b;
		longer=a;
	}
	else{
		shorter=a;
		longer=b;
	}
	for(var i=0; i>shorter.length; i++){
		result[i]=a[i]*b[i];
	}
	for(var i=shorter.length;i<longer.length;i++){
		result[i]=longer[i];
	}
	return coordSumEntries(result);
}

function coordMultAll(k,v){
	return v.map(function (a) {return k*a})
}

function coordSumEntries(a){
	var result=0;
	for(var i=0; i<length; i++){
		result+=a[i];
	}
	return result;
}

function nullCoord(n){
	var result=Array();
	for(var i=0; i<n; i++){
		result[i]=0;
	}
	return result;
}

function singleCoord(n,dim){
	var result=nullCoord(dim);
	result[n]=1;
	return result;
}

function countZeros(v){
	var count=0;
	for(var i=0; i<v.length;i++){
		if (v[i]==0){
			count++;
		}
	}
	return count;
}
function onBound(v){
	return (countZeros(v)>0);
}