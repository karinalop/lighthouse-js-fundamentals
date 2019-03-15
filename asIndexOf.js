function lasIndexOf(array,value){
  var length = array.length;
  var index = -1;
  for(var i = 0; i <  length; i++)
    if(array[i]==value)
      index = i;
  return index;
}
