

var spreadableSymbol = Symbol.isConcatSpreadable;

function isFlattenable(value) {
  return Array.isArray(value)  ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable