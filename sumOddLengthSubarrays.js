//https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let subArray = arr.slice(i, arr.length - j);
      if (subArray.length % 2 == 1) {
        sum += subArray.reduce((a, b) => a + b, 0);
      }
    }
  }
  return sum;
};
