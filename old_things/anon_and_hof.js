anonLog = (x) => {
   console.log(`${x} from inside anonLog`); // this [impure] function performs a "side-effect" kind of work, and returns nothing. 
   return // <-- this 'return' is therefore optional
};

// but this is a true (pure) function - takes a thing, and computes and returns a new thing, having no side-effects
anonTriple = (x) => {
  return x * 3
}

console.log(anonTriple(23));
[1,2,3].forEach(anonLog);

console.log("the above examples are a little ridiculous, since the whole point of anonymous functions is that they don't have a name, because they're not expected to be used outside of the expression where they are placed - otherwise, they'd be real plain old functions, having their own name inside a namespace associated with every script, which would make them reusable, as any other plain old function.");

console.log("Thus, this is how anonymous functions are expected to be used:");

[4,5,6].forEach((x) => { console.log(x); return});

console.log("hm, can we do anonTriple the same way?");
[3, 5, 7].forEach((x) => x * 3);
// sure, but that ^ is useless - each is duly mapped to it's triple, but the result of that computation then disappears in oblivion - we're not doing anything with it. Remember, forEach takes a function, and EXECUTES it for every element of the collection. You are responsible for performing the side-effects that ensure those values get out. E.g.:
[3, 5, 7].forEach((x) => console.log(x * 3));

// or this:
let badTriples = [];
[3, 5, 7].forEach((x) => badTriples.push(x * 3));
console.log(badTriples);

// but this is very bad style! Three lines of side-effecting code, new variable... surely we're better than this? Yes::

let goodTriples = [3, 5, 7].map((x) => x * 3)
console.log(goodTriples);

console.assert(JSON.stringify(goodTriples) === JSON.stringify(badTriples));

/*
Still, forEach HOF (higher-order function) is a good replacement for most cases of for-loops. It, literally, goes throughout a collection, and executes the function, provided as an argument, for each element of the collection. You don't need to specify conditions for terminating the loop, nor increment an index... it's done for you, for free.
*/

bonus = "Now the mysterious empty object disappears!";
exports.bonus = bonus;
// the call to require, like 'require('./anon_and_hof.js');', returns an object containing values (normally functions, but you can export whatever you want) which the script you are 'require'-ing exports. Like Line 42 above.