function initDimSelect(){
	$('#dim-select').change(function(){
		var dim=parseInt($(this).siblings('.ui-slider-track').children().attr('aria-valuenow'));
		if(lastVal!=dim){
			lastVal=dim;
			project.clear();
			demo = new SinDemo(dim);
		}
	});
}