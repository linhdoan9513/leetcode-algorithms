//https://leetcode.com/problems/create-target-array-in-the-given-order/
var createTargetArray = function (nums, index) {
  var target_arr = [];
  for (var i in nums) {
    target_arr.splice(index[i], 0, nums[i]);
  }
  return target_arr;
};
