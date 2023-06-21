function property(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}
module.exports = property;