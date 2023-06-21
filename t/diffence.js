




function isArrayLikeObject(val){
  return typeof val == "object"
}

function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;
      array = array
 // [Function: baseIsEqual] 
  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  // [ { x: 1, y: 2 }, [Function: baseIsEqual] ],
  // { x: 2, y: 1 }
  console.log(array,value,comparator,"arrayIncludesWith");
  return false;
}

function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      isCommon = true,
      length = array.length,
      result = [],
      includes = Array.includes,
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  // function baseUnary(func) {
  //   return function(value) {
  //     return func(value);
  //   };
  // }

  // 先在外层把所有的迭代一遍
  if (iteratee) {
    values = values.map(iteratee) 
    // arrayMap(values, baseUnary(iteratee));
  }

  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  
  outer:
  while (++index < length) {
    var value = array[index],
    // 再对每一个元素进行迭代操作
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;

    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }else if (!includes(values, computed, comparator)) {
      console.log(values,"val",computed,"compted")
      result.push(value);
    }
   
  }
  return result;
}

function overRest(func, start, transform){
  start = Math.max(start === undefined ? (func.length - 1) : start, 0);

  return function() {
    var args = arguments,
        index = -1,
        length = Math.max(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = transform(array);
    return func.apply(this, otherArgs);
  };
}

function baseRest(func, start) {
  return overRest(func, start, (v)=>v);
  return setToString(overRest(func, start, (v)=>v), func + '');
}


function isArray(){
 return  Array.isArray
}

function isStrictComparable(value) {
  return value === value && !isObject(value);
}

function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}


function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(path, srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

function matchesStrictComparable(){
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return 
}



function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

function baseMatches(source) {
  // var matchData =  getMatchData(source);
  var matchData =  Object.entries(source);

  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }

  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

function property(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var baseIteratee = (value)=>{
  if (typeof value == 'function') {
    return value;
  }

  // 说明是一个对象
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);

}


var difference = baseRest(function(array, values) {

  return isArrayLikeObject(array)
    ? baseDifference(array, values.flat(1))
    : [];
});

var differenceBy = baseRest(function(array, values){
  // var iteratee = last(values);
  var iteratee = values.at(-1);
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }

  let s = baseIteratee(iteratee);
  return isArrayLikeObject(array)
    ? baseDifference(array, values.flat(1),s)
    : [];
})
// console.log("🚀 ~ file: diffence.js:227 ~ differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'):", differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));
// console.log("🚀  Math.floor):", differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));


function deepEqual(value,other){
  let k1 = Object.keys(value),k2  =Object.keys(other);
  if(k1 != k2)return false;

  for(let key in value){
    if(key in other && other[key] == value[key]){

    }else {
      return false
    }
  }
}



var differenceWith = baseRest(function(array, values) {

  var comparator = values.at(-1);

  // if (isArrayLikeObject(comparator)) {
  //   comparator = undefined;
  // }
  

  return isArrayLikeObject(array)
    ? baseDifference(array, values.flat(1), undefined, comparator)
    : [];
});

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 
console.log("🚀 ~", differenceWith(objects, [{ 'x': 1, 'y': 2 }], baseIsEqual));
// console.log("🚀", difference([2, 1], [2, 3]));
