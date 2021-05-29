// Is one string a rotated version of another?

// For example:
// String 1: 'hello world'
// String 2: 'orldhello w'

// Extra hint: (click the drop down to ROT7 to see hint)
// Ol eua juahrk znk yzxotm, eua'rr hk zu zxobogrre lotj gtuznkx yzxotm otyojk oz ayotm xkmargx Yzxotm skznujy.

// Juahrkj yzxotm: 'nkrru cuxrjnkrru cuxrj'
// Ykgxin c/ot oz: '       uxrjnkrru c    '

let blah = "Ol eua juahrk znk yzxotm, eua'rr hk zu zxobogrre lotj gtuznkx yzxotm otyojk oz ayotm xkmargx Yzxotm skznujy";

codes = Array.from(blah).map( (c) => c.codePointAt(0) );

let rotatedCodes = codes.map( (n) => n + 7 );

let encoded = String.fromCodePoint(...rotatedCodes);
//console.log(encoded);

 /*
 function foo(a,b,c,d) {
   console.log(`a is ${a}, b is ${b}, c is ${c} and d is ${d}`);
 }

 foo(1,"as",3,"zx")
 let arr = [1,2,"asd"]
 foo(arr);
 foo(...arr);
 */

exports.foo = 42;

let arr = [1,2,3]

console.log(arr)