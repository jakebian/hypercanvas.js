test( "Euclidean Vectors", function() {
  var space= new EucSpace();
  var v1=space.newVector([3,4,0]);
  var v2=space.newVector([0,3,1]);
  var v3=space.newVector([1,0,0]);

  deepEqual(v1.plus(v2).coords(),[3,7,1],'Vector sums');


   deepEqual(v1.inverse().coords(),[-3,-4,0],'Additive inverse');

  deepEqual(v1.dot(v2),12, 'Inner Product');

  deepEqual(v1.norm(),5, 'Norm');

  deepEqual(v3.rotate(new Rotation([0,1],0)).coords(),[1,0,0],'Rotation')

});
