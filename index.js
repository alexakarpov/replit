//let SEPARATOR = "#########################"

let h = require('./testHelpers.js');
//require('./flipSlices.js');
//console.log(SEPARATOR);
//require('./pangram.js');
//require('./anon_and_hof.js');
//require('./detectOutliers.js');
//require('./adjacent.js');
//require('./rot7.js');
//require('./codewars2.js');
//require('./hack_react_2.js');
//require('./codewars.js');
console.log(h.assertCollectionEquality(["a","b"],['a',"b"]));
h.assertCollectionEquality(["q"], ["a"]);
require('./problem.js');