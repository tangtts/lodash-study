var arrayIncludes = function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length &&  array.indexOf(value) > -1;
},
  arrayIncludesWith = require("./arrayIncludesWith");
  
  // Array.prototype.includes.call(array,value)

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith : arrayIncludes,
    length = arrays[0].length,
    othLength = arrays.length,
    othIndex = othLength,
    caches = Array(othLength),
    maxLength = Infinity,
    result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    // if (othIndex && iteratee) {
    //   array = arrayMap(array, baseUnary(iteratee));
    // }
    maxLength = nativeMin(array.length, maxLength);
    // caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
    //   ? new SetCache(othIndex && array)
    //   : undefined;
  }

  // maxLength 是找到这多个数组中最小的长度

  // 取出第一个数组 [[2, 1],[2, 3]]
  array = arrays[0];

  var index = -1,
    seen = caches[0];

  outer: while (++index < length && result.length < maxLength) {
    var value = array[index],
      computed = iteratee ? iteratee(value) : value;

    // value = (comparator || value !== 0) ? value : 0;
    // seen 是undefined
    // 去重
    if (!result.includes(computed)) {
      othIndex = othLength;
      while (--othIndex) {
        // 如果不存在 
        if (!arrays[othIndex].includes(computed)) {
          continue outer;
        }
      }
      // if (seen) {
      //   seen.push(computed);
      // }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseIntersection;
