
// const flatten = require("../lodash/flatten")
const baseFlatten = require("./t/baseFlatten")
const flattenDeep = require("../lodash/flattenDeep")
const flattenDepth = require("../lodash/flattenDepth")

var array = [1, [2, [3, [4]], 5]];
 
// console.log("🚀 ~ file: flatten.js:9 ~ flattenDepth(array, 1):", flattenDepth(array, 1));
// => [1, 2, [3, [4]], 5]
 
// console.log("🚀 ~ file: flatten.js:12 ~ flattenDepth(array, 2):", flattenDepth(array, 2));
// => [1, 2, 3, [4], 5]

console.log("🚀 ~ file: flatten.js:15 ~ flatten([1, [2, [3, [4]], 5]]):", baseFlatten([1, [2, [3, [4]], 5]],1));

// console.log("🚀 ~ file: flatten.js:17 ~ flattenDeep([1, [2, [3, [4]], 5]]):", flattenDeep([1, [2, [3, [4]], 5]]));
// => [1, 2, [3, [4]], 5]