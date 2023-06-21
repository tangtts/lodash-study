
const isObjectLike = require("./isObjectLike");
const isArrayLike = require("./isArrayLike");

function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;