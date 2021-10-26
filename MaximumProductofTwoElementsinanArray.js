//https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

var maxProduct = function (nums) {
  let largest = nums[0];
  let second = null;
  let output = 0;

  for (let i = 1; i < nums.length; i++) {
    if (largest < nums[i]) {
      second = largest;
      largest = nums[i];
    } else if (nums[i] > second) {
      second = nums[i];
    }
  }
  output = (second - 1) * (largest - 1);
  return output;
};

//O(n) because for we have to loop throuh every number in the nums array once, therefore the number of operations are equal to the number of num in the array
//O(1) space complexity
