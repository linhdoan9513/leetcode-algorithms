//https://leetcode.com/problems/shuffle-the-array/
var shuffle = function (nums, n) {
  var new_arr = [];
  for (var i = 0; i < n; i++) {
    new_arr.push(nums[i], nums[n + i]);
  }
  return new_arr;
};
