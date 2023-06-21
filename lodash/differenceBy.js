var baseDifference = require('./_baseDifference'),
    baseFlatten = require('./_baseFlatten'),
    baseIteratee = require('./_baseIteratee'),
    baseRest = require('./_baseRest'),
    isArrayLikeObject = require('./isArrayLikeObject'),
    last = require('./last');

/**
 * This method is like `_.difference` except that it accepts `iteratee` which
 * is invoked for each element of `array` and `values` to generate the criterion
 * by which they're compared. The order and references of result values are
 * determined by the first array. The iteratee is invoked with one argument:
 * (value).
 *
 * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
 * // => [1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
 * // => [{ 'x': 2 }]
 */

let s = function(array, values) {
  // 找到最后一个值
  var iteratee = last(values);

  //如果是数组对象，就转为 undefined
  // 不能是数组 / 对象 只能是 字符串 /函数
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }
  // x 和 Math.floor
  console.log("🚀 ~ file: differenceBy.js:42 ~ s ~ iteratee:", iteratee);

  debugger;
 // 只需要一个参数 iteratee
 // 找基础  的迭代器
 // 如果是函数就不用管
 // 
  let s = baseIteratee(iteratee, 2);

  console.log(s,"s")
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true),s )
    : [];
}


var differenceBy =  baseRest(
  function(array, values) {
    // 找到最后一个值
    var iteratee = last(values);
  
    //如果是数组对象，就转为 undefined
    // 不能是数组 / 对象 只能是 字符串 /函数
    if (isArrayLikeObject(iteratee)) {
      iteratee = undefined;
    }
    // x 和 Math.floor
  
   // 只需要一个参数 iteratee
   // 找基础  的迭代器
   // 如果是函数就不用管
   // 
    let s = baseIteratee(iteratee, 2);
  
    console.log(s,"s")
    //Math.floor 
    return isArrayLikeObject(array)
      ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true),s )
      : [];
  }

);

// console.log("🚀 ~ ", differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));
console.log("🚀 ",
 differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
module.exports = differenceBy;
