
const isObjectLike = require("./isObjectLike");
const isDeepEqual = require("./isDeepEqual")
function baseIsEqual(value, other) {
  if (value === other) {
    return true;
  }
  if (
    value == null ||
    other == null ||
    (!isObjectLike(value) && !isObjectLike(other))
  ) {
    return value !== value && other !== other;
  }
  return isDeepEqual(value,other);
}

module.exports = baseIsEqual