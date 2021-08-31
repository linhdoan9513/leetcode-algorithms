//https://leetcode.com/problems/split-a-string-in-balanced-strings/submissions/
var balancedStringSplit = function (s) {
  var count = 0;
  var output = 0;
  for (var i of s) {
    if (i == "L") {
      count++;
    }

    if (i == "R") {
      count--;
    }

    if (count == 0) {
      output++;
    }
  }
  return output;
};
