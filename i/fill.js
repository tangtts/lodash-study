

var array = [1, 2, 3];
 fill(array, 'a');
// => ['a', 'a', 'a']
 console.log("🚀 ~ file: fill.js:7 ~ fill(Array(3), 2):", fill(Array(3), 2));
// => [2, 2, 2]
//  fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
function fill(array, value, start, end) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  if (start && typeof start != 'number') {
    start = 0;
    end = length;
  }
  return baseFill(array, value, start, end);
}

function baseFill(array, value, start, end) {
  var length = array.length;
  if(!start) start = 0;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }

  // end 可能不存在
  // 如果不存在的话，或者 end 大于 length，就取用 length
  end = (end === undefined || end > length) ? length : end;

  if (end < 0) {
    end += length;
  }

  end = start > end ? 0 : end;

  while (start < end) {
    array[start++] = value;
  }
  console.log(array,"array",value,start,end)
  return array;
}