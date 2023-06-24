

const isStrictComparable =  require("./isStrictComparable");
const baseIsEqual = require("./baseIsEqual");
const matchesStrictComparable = require("./matchesStrictComparable");

// ['active', false] path = active srcValue = false
function baseMatchesProperty(path, srcValue) {
  // 
  if (typeof path == "string" && isStrictComparable(srcValue)) {
    return matchesStrictComparable(path, srcValue);
  }
  // matchesStrictComparable
  // return function (object) {
  //   if (object == null) {
  //     return false;
  //   }
  //   return (
  //     object[key] === srcValue &&
  //     (srcValue !== undefined || key in Object(object))
  //   );
  // };


  return function (object) {
    var objValue = get(object, path);


        return objValue === undefined && objValue === srcValue
        ? path in object
        : baseIsEqual(
            srcValue,
            objValue
          );
  };
}

module.exports = baseMatchesProperty;