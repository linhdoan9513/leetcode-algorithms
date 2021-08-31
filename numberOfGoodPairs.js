//https://leetcode.com/problems/number-of-good-pairs/
//Time Complexity: O(n^2); space complexity: o(n)
var numIdenticalPairs = function (nums) {
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j] && i < j) {
        count += 1;
      }
    }
  }
  return count;
};

//Time Complexity: O(n log n), space complexity: O(1)
var numIdenticalPairs = function (nums) {
  nums.sort();
  var current = 0;
  var output = 0;
  console.log(nums);
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[current]) {
      var n = i - current;
      output += (n * (n - 1)) / 2;
      current = i;
      continue;
    }
    if (i == nums.length - 1) {
      var n = i - current + 1;
      output += (n * (n - 1)) / 2;
    }
  }
  return output;
};

//Time Complexity: O(n), space complexity: O(n) using - hash table
var numIdenticalPairs = function (nums) {
  let table = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in table) {
      table[nums[i]] += 1;
    } else {
      table[nums[i]] = 1;
    }
  }

  let count = 0;
  for (const [key, value] of Object.entries(table)) {
    count += (value * (value - 1)) / 2;
  }
  return count;
};
