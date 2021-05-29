let isPangram = (texto) => {
  var alphabet = new Set();

  let charTest = (c) => {
    return c.toLowerCase() != c.toUpperCase();
  }

  for (let i = 'a'.charCodeAt(); i < 'z'.charCodeAt() + 1; i++) {
    alphabet.add(String.fromCharCode(i));
  };

  let letters = texto.toLowerCase().split('').filter(charTest);

  for(i in letters) {
    alphabet.delete(letters[i]);
  }

  console.log(alphabet);
  return alphabet.size == 0;
};

input = "Five big quacking Zephyrs jolt my wax bed.";

console.log(isPangram(input));
console.log(isPangram("leo"));