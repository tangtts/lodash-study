
const baseIndexOfWith = require("./t/baseIndexOfWith");
const baseIndexOf = require("./t/baseIndexOf");
const copyArray = require("./t/copyArray");
const baseIteratee = require("./t/baseIteratee");
const baseIsEqual = require("./t/baseIsEqual");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;




function pull(array, ...values) {
  return basePullAll(array, values);
}

function pullAll(array, values) {
  return basePullAll(array, values);
}

function pullAllBy(array, values, iteratee){
  return  basePullAll(array, values, baseIteratee(iteratee))
}



var array = ['a', 'b', 'c', 'a', 'b', 'c'];
// let r  = pullAll(array, ['a', 'c']);

var array1 = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];


let r1  = pullAllBy(array1, [{ 'x': 1 }, { 'x': 3 }], 'x');
// => [{ 'x': 2 }]
console.log(r1,"r1")

 


function pullAllWith(array, values, comparator){
  return  basePullAll(array, values,undefined, comparator)
}


var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
 
let r3 =  pullAllWith(array, [{ 'x': 3, 'y': 4 }],baseIsEqual);
// [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
console.log(r3)
// let r  =  pull(array, 'a', 'c');
// console.log(r,"r")

// let x = basePullAll(['a', 'b', 'c', 'a', 'b', 'c'],['b'])

// console.log(x,"x")

function basePullAll(array,values,iteratee,comparator){
  var index = -1,length = values.length,seen = array;

  var indexOf = comparator ? baseIndexOfWith : baseIndexOf;

  if(iteratee){
    seen = array.map(iteratee)
  }


  while (++index < length) {
    var fromIndex = 0,
    value = values[index],

    computed = iteratee ? iteratee(value) : value;

    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      if(seen != array){
        splice.call(seen, fromIndex, 1);
      }
      splice.call(array, fromIndex, 1);
    }
  }
  return array
}


function basePullAll2(array, values, iteratee, comparator) {
  var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
    index = -1,
    length = values.length,
    seen = array;

  if (array === values) {
    values = copyArray(values);
  }

  if (iteratee) {
    seen = array.map(function (value) {
      return iteratee(value);
    });
  }
  while (++index < length) {
    var fromIndex = 0,
      value = values[index],
      computed = iteratee ? iteratee(value) : value;

    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      if (seen !== array) {
        splice.call(seen, fromIndex, 1);
      }
      splice.call(array, fromIndex, 1);
    }
  }
  return array;
}
