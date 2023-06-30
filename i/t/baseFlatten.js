

const isFlattenable = require('./isFlattenable');
const arrayPush = require('./arrayPush');

function baseFlatten(array, depth, predicate,result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate,result);
      } else {
        arrayPush(result, value);
      }
    } else  {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten