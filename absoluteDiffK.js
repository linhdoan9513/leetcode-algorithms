//https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

//Time Complexity: O(n^2) , space complexity: O(n)
var countKDifference = function (nums, k) {
  let output = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let absoluteDiff = Math.abs(nums[i] - nums[j]);
      if (absoluteDiff === k) {
        output++;
      } else {
        continue;
      }
    }
  }
  return output;
};
