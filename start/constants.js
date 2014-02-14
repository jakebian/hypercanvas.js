DEFAULT_COLOR="#555";
DOT_RADIUS=15;
var DEMO_LIST=[
	{id:'sinDemo', demo:function(dim){
		return new SinDemo(dim);
	}},
	{id:'cubeDemo', demo:function(dim){
		return new CubeDemo(dim);
	}},
	{id:'cylinderDemo', demo:function(dim){
		return new CylinderDemo(dim);
	}},
	{id:'sinFunctionDemo', demo:function(dim){
		return new SinFunctionDemo(dim);
	}},
	{id:'axesDemo', demo:function(dim){
		return new AxesDemo(dim);
	}},
];