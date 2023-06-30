function isDeepEqual(value1,value2){
  let k1 = Object.keys(value1),k2  = Object.keys(value2);

  if(k1.length != k2.length)return false;

  for(let k in value1){
    if(!(k in value2) || value2[k] != value1[k]){
      return false
    }
  }
  return true

}

module.exports = isDeepEqual