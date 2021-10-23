//https://leetcode.com/problems/minimize-product-sum-of-two-arrays/

var minProductSum = function (nums1, nums2) {
  const sortedNums1 = nums1.sort((a, b) => a - b);
  const sortedNums2 = nums2.sort((a, b) => b - a);
  let output = 0;

  for (let i = 0; i < nums1.length; i++) {
    let productSum = nums1[i] * nums2[i];
    output += productSum;
  }
  return output;
};

//O(1) space because only need to return output;
//O(n) because we have to loop through each value to calculate minProductSum.
