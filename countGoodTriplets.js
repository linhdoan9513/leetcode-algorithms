//https://leetcode.com/problems/count-good-triplets/

//Time Complexity: O(n^3); space complexity: o(1)
var countGoodTriplets = function (arr, a, b, c) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      for (var k = j + 1; k < arr.length; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          count += 1;
          console.log(count + " at i = " + i + " at j = " + j + " at k = " + k);
        }
      }
    }
  }
  return count;
};
