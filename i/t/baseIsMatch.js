const baseIsEqual = require("./baseIsEqual")

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

function baseIsMatch(object, source, matchData, customizer) {

  var index = matchData.length,
  length = index,
  noCustomizer = !customizer;
  
  console.log("🚀 ~ file: baseIsMatch.js:10 ~ baseIsMatch ~ index:", index);
  if (object == null) {
    return !length;
  }

  object = Object(object);

  while (index--) {
    var data = matchData[index];

    if (
      noCustomizer && data[2]
        ? data[1] !== object[data[0]]
        : !(data[0] in object)
    ) {
      return false;
    }
  }

  while (++index < length) {
    data = matchData[index];

    var key = data[0], // key =  user 
      objValue = object[key], // user -> barney
      srcValue = data[1]; // barney

      if(srcValue !== objValue){
        return false
      }
      return

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      // var stack = new Stack();
      var stack
      
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      console.log(srcValue,objValue,"objValue") // 
      if (
        !(result === undefined
          ? baseIsEqual(
              srcValue,
              objValue,
              COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG,
              customizer,
              stack
            )
          : result)
      ) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch