//https://leetcode.com/problems/richest-customer-wealth/
//Time Complexity: O(n^2); space complexity: o(n)
var maximumWealth = function (accounts) {
  var sum_arr = [];
  for (var i = 0; i < accounts.length; i++) {
    var sum = 0;
    for (var j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    sum_arr.push(sum);
  }
  return Math.max(...sum_arr);
};


