
// const _ = require("../lodash");
const differenceWith = require("./t/differenceWith");

const equal = require("./t/deep");

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 
let r = differenceWith(objects, [{ 'x': 1, 'y': 2 }], equal);

// [ { x: 2, y: 1 } ]
//  r = _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);


console.log("🚀 ~ file: difference.js:7 ~ r:", r);

