//https://leetcode.com/problems/maximum-subarray/
var maxSubArray = function (nums) {
  let new_arr = [];
  if (nums.length === 1) {
    return nums[0];
  } else {
    for (let i = 0; i < nums.length; i++) {
      let current_sum = nums[i];
      let current_val = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
        current_val = Math.max(current_val, (current_sum += nums[j]));
      }
      new_arr.push(current_val);
    }
    return Math.max(...new_arr);
  }
};

//dynamic programming:
var maxSubArray = function (nums) {
  let current_sum = 0;
  let new_arr = [];
  if (nums.length === 0) {
    return nums[0];
  } else {
    for (let i = 0; i < nums.length; i++) {
      let current_val = nums[i];
      current_sum = Math.max(current_val, (current_sum += nums[i]));
      new_arr.push(current_sum);
    }
    return Math.max(...new_arr);
  }
};
