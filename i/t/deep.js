
const isObjectLike = require("./isObjectLike")

function deepEqual(value,other){
  let k1 = Object.keys(value),k2  =Object.keys(other);
  if(k1.length != k2.length)return false;


  for(let key in value){
    if(key in other && other[key] == value[key]){

    }else {
      return false
    }
  }
  return true
}

function baseIsEqual(value, other) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  
return deepEqual(value, other)
}

module.exports = baseIsEqual