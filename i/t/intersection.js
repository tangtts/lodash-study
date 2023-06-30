
const baseIntersection = require("./baseIntersection")

var intersection = function(...arrays) {
  // 对 arrays 的每一项进行判断是否是一个 arrayLike
 
  return  baseIntersection(arrays)
    
};
module.exports = intersection