// const intersection = require("./t/intersection")
const intersection = require("../lodash/intersection");
// const intersectionBy = require("../lodash/intersectionBy");

const arrayIncludesWith = require("./t/arrayIncludesWith")

// const intersectionWith = require("../lodash/intersectionWith");
const baseIteratee = require("./t/baseIteratee");
// let r = intersection([2, 1,4], [2, 3,1,0]);
// console.log(r);

// console.log("🚀 ~ file: intersection.js:10 ~ baseIntersection([[2, 1],[2, 3,1,0]]):", baseIntersection([[2, 1,4],[2, 3,1,0]]));

function baseIntersection(arrays, iteratee,comparator) {
  // 第一个数组的长度
  var includes = comparator ? arrayIncludesWith : (array,ele)=>{
    return array.includes(ele)
  };

  var length = arrays[0].length,
    // arrays 总共的数组个数
    othLength = arrays.length,
    othIndex = othLength,
    maxLength = Infinity,
    // 结果数组
    result = [],
    caches = new Map();
  while (othIndex--) {
    var array = arrays[othIndex];

    if (othIndex && iteratee) {
      array = array.map(iteratee);
    }

    if (iteratee) {
      caches.set(othIndex, array);
    }

    maxLength = Math.min(array.length, maxLength);
  }


  // 取出第一个数组 [2, 1]
  array = arrays[0];
  var index = -1;

  outer: while (++index < length && result.length < maxLength) {
    // 第一个数组的每一个元素
    var value = array[index];
    computed = iteratee ? iteratee(value) : value;
    
    // 去重,如果 result 数组已经存在当前元素，则不需要再次添加
    if (!includes(result, computed, comparator)) {
      othIndex = othLength;

      // 遍历剩余 数组,arrays[othIndex] 是每一个剩余数组
      // 由于 是倒序循环，otherIndex 不会等于0，也就是刚好略过要匹配的数组
      while (--othIndex) {
        var cache = caches.get(othIndex);
        // 如果不存在，则继续下一次循环
        if (
          !(cache ? includes(cache,computed): 
          
          includes(arrays[othIndex], computed, comparator)
          )
        ) {
          continue outer;
        }
      }
      // 如果其他的数组都存在，则把 value 存入 result 结果中
      result.push(value);
    }
  }
  return result;
}

var intersectionBy = function (...arrays) {
  let iteratee =  arrays.pop(); // 最后一项
  return baseIntersection(arrays, baseIteratee(iteratee));
};

var intersectionWith = function (...arrays) {
  let iteratee =  arrays.pop(); // 最后一项
  return baseIntersection(arrays, undefined, iteratee);
};

// => [2]

// let r1 = intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// let r2 = intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// console.log(r2);
// => [2.1]

// The `_.property` iteratee shorthand.
// let r2 = intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// console.log(r2)
// => [{ 'x': 1 }]

var objects = [{ 'x': 12, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 2 },{ 'x': 2, 'y': 1 }];


function isDeepEqual(value1,value2){
  let k1 = Object.keys(value1),k2  = Object.keys(value2);

  if(k1.length != k2.length)return false;

  for(let k in value1){
    if(!(k in value2) || value2[k] != value1[k]){
      return false
    }
  }
  return true

}


console.log("🚀", intersectionWith(objects, others, isDeepEqual));
