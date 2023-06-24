var Symbol = require('./_Symbol');

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
  tag = value[symToStringTag];
  value[symToStringTag] = undefined;
  var unmasked = true;
  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  console.log(value[symToStringTag] )

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  
  return result;
}
let  s =  {
  _tag:'Validator',
  get [Symbol.toStringTag]() {
    return this._tag;
  },
  set [Symbol.toStringTag](val){
    this._tag = val
    throw new Error("Error")
  }
}

// let s = {};
// s[Symbol.toStringTag] = "Validator"

const target = {

  name: '张三',

  sayHello: function() {

    console.log('你好，我是' + this.name);

  }

};



const handler = {

  get(target, property) {

    if (property === 'name') {

      return '李四';

    }

  }

};



const proxy = new Proxy(target, handler);




// console.log("🚀 ~ file: _getRawTag.js:53 ~ getRawTag(s):", getRawTag(s));
console.log("🚀 ~ file: _getRawTag.js:54 ~ Object.prototype.toString.call(s):", Object.prototype.toString.call(Proxy));

module.exports = getRawTag;
