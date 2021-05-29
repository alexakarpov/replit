// Write a function called 'checkWinner'. This function will take an array with a length of 7. Each element of the array will be either; 'red', 'black', or 0. We can assume that no violation of either of these is possible (i.e. input will always be of length 7, and elements will only be 'red', 'black', or 0).

// Your function should accept this array as its only parameter.

// If there are 4 'red' elements consecutively in a row, 'checkWinner' should return the string: 'Red Wins!'. Similarly, if there are 4 'black' elements consecutively in a row, 'checkWinner' should return the string: 'Black Wins!'. If neither of these is the case, 'checkWinner' should return 'Draw!'.

// Here are some examples of your code running, assuming you have successfully created the described function. Please be sure to name the function "checkWinner".

let checkWinner = function(arr) {
  const VICTORY_TRESHOLD = 4; // good habit of avoiding using "magic numbers" in code. A constant should be declared as such, and with a descriptive name, so as not to puzzle your collaborators with 'magic numbers'; their meaning could be inferred from the context, but they present double challenge - first, the work of inferring the meaning, and second, if the value changes, you are forced to change it in all the places where it's as a literal.
  let conseqBlacks = 0;
  let conseqReds = 0;
  for (i in arr) {
  // console.log(`Got a ${arr[i]} vote at ${i}, current stats are B:${conseqBlacks}, R:${conseqReds}`);
    switch (arr[i]) { // google switch statement
      case 'black':
        conseqBlacks++; // it could be the very first one, but that doesn't matter - so the count will go from 0 to 1 ¯\_(ツ)_/¯
        conseqReds = 0;
        break; // breaks out of switch, not the loop
      case 'red':
        //same comments apply, mutatis mutandis
        conseqReds++;
        conseqBlacks = 0;
        break;
      default:
        // 0 is the only other option; all that matters is that both counts must be reset
        conseqBlacks = conseqReds = 0;
    }
    // the loop isn't over yet, but we could have a winner already; check for that
    if (conseqBlacks == VICTORY_TRESHOLD) return "Black Wins!";
    if (conseqReds == VICTORY_TRESHOLD) return "Red Wins!";
  }
  // note another theoretical possibility of a draw - if both black and red vote consequtive counts are >= 4. The problem statement doesn't specify what must happen in this case; in this solution, Team Black wins by virtue of their check preceding the Red's.
  // COR

  // Loop is over, and no one won yet?
  return "Draw!";
}

console.log(checkWinner([]));// empty game
console.log(checkWinner(['black','black','black','red','red','red'])); // another draw

let blackWinner = checkWinner(['black', 'red', 'black', 'black', 'black', 'black', 'red']);
console.log(blackWinner); //-> 'Black Wins!'

let anotherBlackWinner = checkWinner(['red', 'black', 'red', 'red', 'black', 'black', 'black', 'black', 0]);
console.log(anotherBlackWinner); //-> 'Black Wins!'

let redWinner = checkWinner([0,0,0, 'red', 'red', 'red', 'red']);
console.log(redWinner); //-> 'Red Wins!'

let anotherRedWinner = checkWinner([0,0,0,'black', 'black','black','red', 'red', 'red', 'red']);
console.log(anotherRedWinner)

//exports.checkWinner = checkWinner;