const isObjectLike = require("./isObjectLike");
const isArrayLikeObject = require("./isArrayLikeObject");

const isObject = require("./isObject");







function arrayIncludesWith(array, value, comparator) {
  var index = -1,
    length = array == null ? 0 : array.length;
  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
    isCommon = true,
    length = array.length,
    result = [],
    includes = Array.prototype.includes,
    valuesLength = values.length;

 
  // 先在外层把所有的迭代一遍
  if (iteratee) {
    values = values.map(iteratee);
  }
  
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  } 
  

  outer: while (++index < length) {
    var value = array[index];
      // 对原数组每一个元素进行迭代操作
       computed = iteratee == null ? value : iteratee(value);


    // 不使用比较器
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    } else if (!includes(values, value,comparator)) {
      result.push(value);
    }
  }
  return result;
}

function overRest(func, start, transform) {
  // start 是准备从哪开始
  start = Math.max(start === undefined ? func.length - 1 : start, 0);
  console.log("🚀 ~ file: differenceWith.js:79 ~ overRest ~ start:", start);
// func  array, values
// start = 1

  return function () {
    var args = arguments,

    index = -1,
    length = Math.max(args.length - start, 0),
    array = Array(length);
    // args
    // {
    //   '0': [ { x: 2 }, { x: 1 } ],
    //   '1': [ { x: 1 } ],
    //   '2': 'x'
    // }
    while (++index < length) {
      array[index] = args[start + index];
    }
    console.log("🚀 ~ file: differenceWith.js:97 ~ array:", array);
    // 把剩余参数 赋值 给 array
    index = -1;

    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }
    //  otherArgs[ [ { x: 2 }, { x: 1 } ], <1 empty item> ]
    

    otherArgs[start] = transform(array);
 //   start = 1
    console.log("🚀 ~ file: differenceWith.js:102 ~ otherArgs:", otherArgs);

    return func.apply(this, otherArgs);
  };
}



function baseRest(func, start) {
  return overRest(func, start, v => v);
}



















// var difference = baseRest(function (array, values) {
//   return isArrayLikeObject(array) ? baseDifference(array, values.flat(1)) : [];
// });

var difference = function (array, values) {
  return isArrayLikeObject(array) ? baseDifference(array, values.flat(1)) : [];
};

var differenceBy = function (array, ...values) {
  // var iteratee = last(values);
  console.log(array,values)
//   [ 2.1, 1.2 ] [ [ 2.3, 3.4 ], [Function: floor] ]
// [ { x: 2 }, { x: 1 } ] [ [ { x: 1 } ], 'x' ]


  var iteratee = values.at(-1);
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }
  console.log("🚀 ~ file: differenceWith.js:260 ~ differenceBy ~ iteratee:", iteratee);

  let s = baseIteratee(iteratee);
  debugger
  return isArrayLikeObject(array)
    ? baseDifference(array, values.flat(1), s)
    : [];
};

var differenceWith = function (array, ...values) {
  var comparator = values.at(-1);
  console.log("🚀 ~ file: differenceWith.js:276 ~ differenceWith ~ comparator:", comparator);

  return isArrayLikeObject(array)
    ? baseDifference(array, values.flat(1), undefined, comparator)
    : [];
};

var objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];

// let s1 =  differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// // => [1.2]
 
// // The `_.property` iteratee shorthand.
// let s2 = differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');

module.exports = differenceWith;
// console.log("🚀", difference([2, 1], [2, 3]));
