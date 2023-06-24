
const baseIteratee = require("./t/baseIteratee");
const baseWhile = require("./t/baseWhile");
const baseSlice = require("./t/baseSlice");


let arr = [()=>{
  let s5 = 1;
  console.log(s5)
  s5 = 2;
}];
arr.pop()()


function drop(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : Math.floor(n);
  return baseSlice(array, n < 0 ? 0 : n, length);
}

function dropRight(array, n, guard) {
  var length = array == null ? 0 : array.length;

  if (!length) {
    return [];
  }

  n = (guard || n === undefined) ? 1 : Math.floor(n);

  n = length - n;
  console.log(n,"n")

  return baseSlice(array, 0, Math.max(0,n));
}


function dropRightWhile(array, predicate) {
  return (array && array.length)
    ? baseWhile(array, baseIteratee(predicate), true, true)
    : [];
}

// baseWhile 
// while ((fromRight ? index-- : ++index < length) &&
// predicate(array[index], index, array)) {}


function dropWhile(array, predicate) {
  return (array && array.length)
    ? baseWhile(array, baseIteratee(predicate), true)
    : [];
}


var users = [

  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

//  如果第一个是 true，就会执行 第二个类型，直到是 false
// let s = dropWhile(users,function(o){return o.active;});
// console.log(s)
// => objects for ['pebbles']

// The `matches` iteratee shorthand.
let s = dropWhile(users, {'user':'barney', 'active': false });
console.log(s)
// // => objects for ['fred', 'pebbles']

// // The `matchesProperty` iteratee shorthand.
// dropWhile(users, ['active', false]);
// // => objects for ['pebbles']

// // The `property` iteratee shorthand.
// dropWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']
 


// let r1 =  dropRightWhile(users, function(o) { return !o.active; });
// // => objects for ['barney']
// console.log(r1);
 
// // The `matches` iteratee shorthand.
// let r2 = dropRightWhile(users, { 'user': 'pebbles', 'active': false });
// // => objects for ['barney', 'fred']
// console.log(r2);

// // The `matchesProperty` iteratee shorthand.
// let r3 = dropRightWhile(users, ['active', false]);
// // => objects for ['barney']
// console.log(r3);

// // The `property` iteratee shorthand.
// let r4 = dropRightWhile(users, 'active');
// console.log(r4);

// console.log("🚀 ~ file: drop.js:59:", dropRight([1, 2, 3],2));
// console.log("🚀 ~ file: drop.js:32:", drop([1, 2, 3],3));
