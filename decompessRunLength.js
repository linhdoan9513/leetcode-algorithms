//https://leetcode.com/problems/decompress-run-length-encoded-list/
var decompressRLElist = function (nums) {
  var output = [];
  for (var i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      for (var j = 0; j < nums[i]; j++) {
        output.push(nums[i + 1]);
      }
    }
  }
  return output;
};

var decompressRLElist = function (nums) {
  let new_arr = [];
  for (let i = 0; i < nums.length; i += 2) {
    let new_num = new Array(nums[i]).fill(nums[i + 1]);
    new_arr.push(...new_num);
  }
  return new_arr;
};
