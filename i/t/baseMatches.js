
const matchesStrictComparable  = require("./matchesStrictComparable");
const baseIsMatch = require("./baseIsMatch");


function baseMatches(source) {
  // var matchData =  getMatchData(source);
  var matchData = Object.entries(source);
  // [ [ 'user', 'barney' ], [ 'active', false ] ]
  // console.log("🚀 ~ file: baseMatches.js:9 ~ baseMatches ~ matchData:", matchData);

 // matchData = [[0,1,2]]
  // if (matchData.length == 1 && matchData[0][2]) {
  //   return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  // }

  return function (object) {
    // { user: 'barney', active: false }
    // { user: 'barney', active: false }
    //  [ [ 'user', 'barney' ], [ 'active', false ] ]
    // console.log("🚀 ~ file: baseMatches.js:18 ~ object:", object, "z", source, "ls", matchData);
    
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches