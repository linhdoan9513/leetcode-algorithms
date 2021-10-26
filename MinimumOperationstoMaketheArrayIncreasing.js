//https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/

var minOperations = function (nums) {
  let output = 0;

  if (nums.length < 2) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] <= nums[i]) {
      let change = nums[i] - nums[i + 1] + 1;
      nums[i + 1] += change;
      output += change;
    }
  }

  return output;
};

//O(n) because for we loop thru all the nums and for each nums we perform a constant number of operations, therefor the number of operation is linear to the total number of words

//o(1) space complexity because it's constant space use. the algorithm allocates the same number of output irrespective to the number of nums in the array.
// In contrast, O(N) denotes linear space use: the algorithm space use grows together with respect to the input size.
