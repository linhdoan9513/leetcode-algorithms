//https://leetcode.com/problems/count-items-matching-a-rule/
var countMatches = function (items, ruleKey, ruleValue) {
  var count = 0;
  if (ruleKey == "type") {
    j = 0;
  } else if (ruleKey == "color") {
    j = 1;
  } else {
    j = 2;
  }

  for (var i in items) {
    if (items[i][j] === ruleValue) {
      count++;
    }
  }
  return count;
};
