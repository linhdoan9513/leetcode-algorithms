//https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

var sumZero = function (n) {
  let output = [];
  let currentSum = 0;

  if (n <= 1) {
    output.push(0);
  } else {
    for (let i = 0; i < n; i++) {
      let lastNum = n - 1;
      if (i < lastNum) {
        currentSum++;
        output.push(currentSum);
      } else {
        currentSum = output.reduce((partialSum, a) => partialSum + a, 0);
        output.push(0 - currentSum);
      }
    }
  }
  return output;
};
