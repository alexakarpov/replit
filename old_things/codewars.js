
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// function inArray(array1,array2){
//   var r = [];
//   array1.split();
// console.log(array1.split(' '));
// }

//  var array1 = ["tarp", "mice", "bull"];
//  console.log(array1.split(' '));

function inArray(array1, array2) {
  // return a1 strings that are substrngs of a2 strings

  const substringTest = function(str, candidate) {
    return str.indexOf(candidate) != -1;
  };

  // ok, so we decided to avoid fat-arrow functions.
  // This presents a challenge, if we want to use the  power of 'filter' and 'some': the challenge is verbosity of old Javascript syntax that will ensue. But here we go: 
  return array1.filter(function(x) {
    return array2.some(function(s) {
      return substringTest(s,x);
    })
  }).sort();
}
/* you may notice that while we've avoided fat-arrow functions, we didn't avoid using anonymous functions as such. After all, what is a familiar old 'function(..) { ... }' expression without a name? Exactly - an anonymous function! So they existed all along, the syntax got a long overdue upgrade in 2015, that's all.

NOTE - the syntax:

var fooAdd = function(a, b) {
  return a+b;
}

existed all along, together with the other kind:

function fooAdd(a, b) {
  return a + b;
}

I personally prefer the first, because the naming of an otherwise anonymous function is made explicit, while in the second form it is hidden in the inner working of "function" keyword.

It would be a fair question though - "can we do this using plain old _named_ functions?" Yes we can, but the code will get even more ugly. Still, if you wish to do it, I will accomodate, though it begs a question - why would you want to resist the evolution of syntax, if the old way unavoidably results in ugly and verbose code, which is hard to read (or write)? Trust me, you are shooting yourself in the foot by sticking to "plain old way". There's no way around the core problem - plain old Javascript is just not expressive enough for great many things. The notion of language's power of expressiveness is very established in CS:
https://en.wikipedia.org/wiki/Expressive_power_(computer_science)

It was the key to me choosing to major in Computer Science, as I narrated before: when I saw the elegance and expressivity of Scheme (a member of Lisp family), coming from the Java and C++ world, I was won over.

*/

let inArrayF = function(ar1, ar2) {
  return ar1.filter((x) => ar2.some((s) => s.indexOf(x) != -1)).sort();
}

var array1 = ["vel", "liv", "qull"];
var array2 = ["lively", "alive", "harp", "sharp", "armstrong"];
let ar1 = ["tarp", "mice", "bull"];
let ar2 = ["lively", "alive", "harp", "sharp", "armstrong"];

console.log("this should be empty:");
console.log(inArrayF(ar1, ar2));
console.log("this should be non-empty:");
console.log(inArrayF(array1, array2));
console.log('===and without anonymous functions===');
console.log("this should be empty:");
console.log(inArray(ar1, ar2));
console.log("this should be non-empty:");
console.log(inArray(array1, array2));

// let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']
// let array1 = ["tarp", "mice", "bull"];
// let array2 = ["lively", "alive", "harp", "sharp", "armstrong"];

// /**
//  * Filter array items based on search criteria (query)
//  */

// function filterItems(arr, query) {


//   return arr.filter(function(el) {
//       return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
//   });
//   console.log(filterItems(array2, `${substr}`))
// }

// Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)