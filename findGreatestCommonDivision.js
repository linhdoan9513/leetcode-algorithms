//https://leetcode.com/problems/find-greatest-common-divisor-of-array/

//Time Complexity: O(n log n) and space complexity O(1);
var findGCD = function (nums) {
  let minNum = Math.min(...nums);
  let maxNum = Math.max(...nums);

  return gcd(minNum, maxNum);
};

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
