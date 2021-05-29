// •••••••••••••••••••••••••••••••••••••••••

// Flip every pair of characters in a string.

// Example:
// var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

function flipPairs(input) {
  let result = '';
  for (let i = 0; i < input.length; i += 2) {
     result += input[i+1] || '';
     result += input[i];
  }
  return result;
};

let input = 'check out how interesting this problem is, it\'s insanely interesting!';

console.log(flipPairs(input));
