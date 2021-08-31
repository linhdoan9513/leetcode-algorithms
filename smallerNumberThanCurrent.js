//https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

//Time Complexity: O(n^2); space complexity: o(n)
var smallerNumbersThanCurrent = function (nums) {
  var new_array = [];
  for (var i = 0; i < nums.length; i++) {
    var count = 0;
    for (var j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count += 1;
      }
    }
    new_array.push(count);
  }
  return new_array;
};
