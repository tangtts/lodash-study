

function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;


  // 可以传入 负数，但是绝对值不能超过 length 
  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  // 取 end 与 length 的最小值
  // Math.min(undefined,0) 是NaN
  end = end > length ? length : end;

  // if (end < 0) {
  //   end += length;
  // }
  
  length = start > end ? 0 : end - start;

  // 2 1
  // console.log("🚀 ~ file: drop.js:20 ~ baseSlice ~ length:", length,start);
  // start >>>= 0;
  // 1
  // console.log("🚀 ~ file: drop.js:22 ~ baseSlice ~ start:", start);

  // 取 start 与 end 之间的值
  var result = Array(length);
  
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice