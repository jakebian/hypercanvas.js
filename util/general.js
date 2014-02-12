function clone(object){
	return jQuery.extend({}, object);
}
function hcInit(){
	paper.install(window);
	view.center=[0,0];
}