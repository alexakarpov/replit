let flipSlices = function(inputStr, size) {
  let resultStr = '';
  for (let i = 0; i < inputStr.length; i += size) {
    console.log(`i=${i}, i+size=${i+size}`);
    let chunk = inputStr.slice(i, i + size)
    let chunkLetters = chunk.split('');
    resultStr += chunkLetters.reverse().join('');
  }
  return resultStr;
}
