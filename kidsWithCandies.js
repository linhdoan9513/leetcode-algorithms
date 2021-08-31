// 1431. Kids With the Greatest Number of Candies
var kidsWithCandies = function (candies, extraCandies) {
  var n = Math.max(...candies);
  var comparison = [];
  for (var i in candies) {
    comparison.push(n - candies[i] <= extraCandies);
  }
  return comparison;
};
