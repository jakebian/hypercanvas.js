function clone(object){
	return jQuery.extend({}, object);
}
function hcInit(){
	paper.install(window);
	view.center=[0,0];
}
function getDemo(id,list){
	for(var i=0; i<list.length;i++){
		if(list[i].id==id){
			return list[i].demo;
		}
	}
	return function(){
		console.log('demo not found');
		return false;
	}
}