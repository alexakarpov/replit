const ffoo = function([first, second, ...rest]) {
  console.log(`first element inside the array is ${first}; second is ${second}`);
};

const fbar = function({ email: email,
  innerObj: {
    phone: phone,
    name: name } }) {
  console.log(`Email is ${email}, name is ${name}`);
  return;
};

console.log(ffoo(['qwe', 'asd']));
console.log(fbar({
  ignore1: "whatever",
  email: "qwe@asd.zxc",
  innerObj: {
    ignore2: "something else",
    phone: "1234567890",
    name: "Vasya"
  }
}));
