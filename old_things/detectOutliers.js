function detectOutlierValue(input) {
  // const nums = input.split(' ').map((s) => parseInt(s)); // replaces lines 4-8

  const strs = input.split(' ');
  const nums = [];
  for (i = 0; i < strs.length; i++) {
    nums.push(parseInt(strs[i]));
  }

  if (nums.length < 3) {
    console.error("Outliers not defined - fewer than 3 elements");
    return 'undefined';
  }

  const vote0 = nums[0] % 2;
  const vote1 = nums[1] % 2;
  const vote2 = nums[2] % 2;
  if (vote0 != vote1) { // then index 2 has a tie-breaker
    return vote2 == vote0 ? 1 + 1 : 0 + 1;
  }
  // first 2 votes agree - outlier is the first dissenter
  for (i = 2; i < nums.length; i++) {
    if (nums[i] % 2 != vote0) {
      return i + 1;
    }
  }

  return 'undefined';
}

console.log(detectOutlierValue("1 3 5 7 42 7 5 3 1"));
console.log(detectOutlierValue("2 4 6 8 10 11"));