//https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

var sumZero = function (n) {
  let output = [];
  let currentSum = 0;
  let outputSum = 0;
  if (n <= 1) {
    output.push(0);
  } else {
    for (let i = 0; i < n; i++) {
      let lastNum = n - 1;
      if (i < lastNum) {
        currentSum++;
        output.push(currentSum);
        outputSum += output[output.length - 1];
      } else {
        output.push(0 - outputSum);
      }
    }
  }
  return output;
};

//cleanup Code:
var sumZero = function (n) {
  let output = [];
  for (var i = 1; i < n; i++) {
    output.push(i);
  }
  output.push((n * (1 - n)) / 2);
  return output;
};
