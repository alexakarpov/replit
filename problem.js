/*
A Request From Corporate
Let us walk through the idea for this problem, as it is somewhat more complex than usual. The problem will require you to write two functions. One function will accomplish a task of some kind, and the other function will be an assertion function which can be used to compare your answer with an expected answer.

The first function you will write will be called generateSampleView. The input for this function will always be an array of objects, theoretically the result of a call to an API, or database. generateSampleView will take this array as its parameter, and return an array of strings based upon conditions that we will describe in a moment. The format of this input array of objects is described below:
*/

function generateSampleView(arr) {
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    var addressAt = arr[i].address;
    var email = arr[i].email;
    if (arr[i].id % 2 === 1) {
      output.push(`${email}`);
    } else {
      output.push(`${addressAt.street}, ${addressAt.suite}, ${addressAt.city}, ${addressAt.zipcode}`);
    }
  }
  return output;
}

/*

Leo, there is an important design pattern that coders learned through decades of work. That design pattern could be described as follows: solving a problem, break it into logically independent small pieces. If they will not be very small - sometimes problem's nature will defy attempts of radical simplification - then at least you will isolate code pieces, where each piece will deal with a "subproblem" of the original problem. Making the whole thing more approachable, more manageable - more simple.

I recommended this very approach, when I suggested that you create a helper function first. That function would take a single object, and will extract data from it, as per the original problem's requirements.
Then a _second_ function will go through the input collection (i.e. array of objects) and apply that helper function to every element thereof.
HINT: that second function already exists!
*/

var users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }
];
/*
Note: your function will be tested with a longer input, but the format will remain consistent for each user in the input array.

Your function should examine each user object, and add to the array return value for this function one of the following:

If the value of the id property is odd, add the user's email to the return array
If the value of the id property is even, your function should create a new string for the given user, add the street, suite, city, and zipcode, each separated by a space and a comma, as one string, to the return array
Thus, if our input was the users array listed above, our output would be:

var output = ["Sincere@april.biz", "Victor Plains, Suite 879, Wisokyburgh, 90566-7771"];

The second function you will write will be called assertArraysEqual. It will be a function that takes three parameters: actual will be an array of scalar values, and should ideally be the result of calling a function that you are testing. (presumably the function being tested should return an array of scalar values); expected, also an array of scalar values, should be the theoretical result of calling your function (or, what you "expect" the function to return). Finally, testName will be a string, and should describe what a call to assertArraysEqual is verifying about the function being tested.

???Please DO NOT USE JSON.stringify(), Array.join(), or any other "convert both arrays to strings so I can compare two strings" type of technique to implement this.

There are typically two things that we must check in order to determine that two arrays of scalar values are indeed equal to one another. Do they have the same length, and do they contain the same values. Thus, your function must make a determination about these issues, then either log 'passed' to the console or else 'failed', as well as the testName to the console. The tests for this function will check to see if your console.log message for a passing case contains 'passed', and 'failed' for a failing case (both in lower case).
*/

console.log(generateSampleView(users));

function generateSampleView2(arr) {
  const helper = ({ id: id,
    email: email,
    address: {
      street: street,
      suite: suite,
      city: city,
      zipcode: zipcode } }) =>
       id % 2 == 1 ? email : `${street}, ${suite}, ${city}, ${zipcode}`;
    return arr.map(helper);
}

console.log(generateSampleView2(users));