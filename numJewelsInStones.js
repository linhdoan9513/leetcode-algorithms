//https://leetcode.com/problems/jewels-and-stones/
var numJewelsInStones = function (jewels, stones) {
  var count = 0;
  for (var i = 0; i < jewels.length; i++) {
    for (var j = 0; j < stones.length; j++) {
      if (jewels[i] === stones[j]) {
        count += 1;
      }
    }
  }
  return count;
};
/* more optimal */
var numJewelsInStones = function (jewels, stones) {
  var output = 0;
  for (var i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      output++;
    }
  }
  return output;
};
