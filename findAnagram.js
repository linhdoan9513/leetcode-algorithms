//https://leetcode.com/problems/find-anagram-mappings/

//Time complexity: O(n), space complexity O(n)

var anagramMappings = function (nums1, nums2) {
  let table = {};
  let output = [];
  for (let i = 0; i < nums2.length; i++) {
    table[nums2[i]] = i;
  }

  for (let j = 0; j < nums1.length; j++) {
    if (nums1[j] in table) {
      output.push(table[nums1[j]]);
    }
  }
  return output;
};
