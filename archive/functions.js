/**
 * Given point, dimension and a list of lines, return list of all lines
 * connected to the point, and a list of all vertices.
 * @param  {Array} pt   
 * @param  {Number} d    
 * @param  {Array} lines
 * @return {Object}       
 */
function edges(pt,d,lines){
	var list=[];
	for(var i=0; i<length;i++){
		pt[d]=i*interval;
		list[list.length]=pt.slice();
		if(d<dim-1){
			list=list.concat(edges(pt.slice(),d+1,lines).list);
		}
	}
	if(list.length==length){
		lines[lines.length]=list;
	}
	return {list:list, lines:lines};
}