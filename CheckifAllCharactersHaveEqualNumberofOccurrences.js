//https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

var areOccurrencesEqual = function (s) {
  let table = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in table) {
      table[s[i]]++;
    } else {
      table[s[i]] = 1;
    }
  }

  let firstVal = table[s[0]];

  for (const letter in table) {
    if (table[letter] !== firstVal) {
      return false;
    }
  }
  return true;
};

//Time complexity: O(n), space complexity: O(n)
