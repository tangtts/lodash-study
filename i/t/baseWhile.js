
const baseSlice = require("./baseSlice")

/**
 * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
 * without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to query.
 * @param {Function} predicate The function invoked per iteration.
 * @param {boolean} [isDrop] Specify dropping elements instead of taking them. // 指定删除元素而不是获取元素
 * @param {boolean} [fromRight] Specify iterating from right to left. 
 * @returns {Array} Returns the slice of `array`.
 */
function baseWhile(array, predicate, isDrop, fromRight) {
  var length = array.length,
      index = fromRight ? length : -1;

     // 对每一项执行  predicate 操作,如果 predicate() 为 true 就一直执行
     // 直到 执行结果 false
  while ((fromRight ? index-- : ++index < length) &&
    predicate(array[index], index, array)) {}

    console.log("index",index); // 0


    // 如果是移除元素
     // fromRight 是 true
        // baseSlice(array,0,index+1)
      // 如果 是false 
        // baseSlice(array,index,length)
    
      // 如果不是
        // fromRight 是 true
        // baseSlice(array,index + 1,length)
      // 如果 是false 
        // baseSlice(array,0,index)
  return isDrop
    ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
    : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
}

module.exports = baseWhile;