//https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
//Time Complexity: O(n); space complexity: o(1)
var numberOfSteps = function (num) {
  var count = 0;
  while (num > 0)
    if (num % 2 === 0) {
      num = num / 2;
      count += 1;
    } else {
      num -= 1;
      count += 1;
    }
  return count;
};
