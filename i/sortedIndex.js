

const sortedIndex = require('../lodash/sortedIndex')

// const sortedIndexBy = require('../lodash/sortedIndexBy')
const sortedIndexOf = require('../lodash/sortedIndexOf')
const baseIteratee = require('./t/baseIteratee')

// sortedIndexOf([4, 5, 5, 5, 6], 5)

var objects = [{ 'x': 5 },{ 'x': 7 }];
 
let s1 = sortedIndexBy(objects, { 'x': 6 }, function(o) { return o.x; });

let s2 = sortedIndexBy(objects, { 'x': 4 }, 'x');


let s = sortedIndex([30, 50], 40);

console.log(s);
console.log(s1,"s1");
console.log(s2,"s2");

let r5 =  baseSortedIndex([30, 40], 40);

console.log(r5)

function baseSortedIndex(array,value){
  var low = 0,
      high = array == null ? low : array.length;

      if (typeof value == 'number') {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];
    
          if (computed < value) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }

        return high;
      }

}

function baseSortedIndexBy(array, value, iteratee){
  var low = 0,
      high = array == null ? 0 : array.length;

      value = iteratee(value);

      while (low < high) {
        let mid = (low + high) >>>1;
        let computed = iteratee(array[mid]);

        if( computed < value){
          low = mid + 1
        }else {
          high = mid
        }
      }
      return high
}
function sortedIndexBy(array, value, iteratee) {
  return baseSortedIndexBy(array, value, baseIteratee(iteratee));
}

// function sortedIndex(array, value) {
//   return baseSortedIndex(array, value);
// }
