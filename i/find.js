const findIndex = require("../lodash/findIndex")





let s1 = 10,s2 = 100;
let fromRight = true
while (fromRight ? ++s1 :--s2){
  console.log(s1)
  break
}

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
let r = findIndex(users, function(o) { return o.user == 'fred'; });
console.log(r,"11");
// => 0
 
// The `matches` iteratee shorthand.
findIndex(users, { 'user': 'fred', 'active': false });
// => 1
 
// The `matchesProperty` iteratee shorthand.
findIndex(users, ['active', false]);
// => 0
 
// The `property` iteratee shorthand.
let s = findIndex(users, 'active');
console.log(s,"24")
// => 2