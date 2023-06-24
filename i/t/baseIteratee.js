
const isArray = require("./isArrayLike");
const property = require("./property");
const baseMatches = require("./baseMatches");
const baseMatchesProperty = require("./baseMatchesProperty");

var baseIteratee = value => {
  if (typeof value == "function") {
    return value;
  }

  // 说明是一个对象
  if (typeof value == "object") {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
};

module.exports = baseIteratee;