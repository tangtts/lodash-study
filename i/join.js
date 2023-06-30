
const join = Array.prototype.join;

// join(value,separated,前缀，后缀)
function join2(value,separated){
 return join.call(value,separated)
}

function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}


let r = join2([1,2,3],"aaa")

console.log(r,"r")