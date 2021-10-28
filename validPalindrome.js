//leetcode.com/problems/valid-palindrome/

https: var isPalindrome = function (s) {
  const regex = /[^A-Za-z0-9]/g;
  const string = s.replace(regex, "");

  const reverseString = string.split("").reverse().join("");

  return string.toLowerCase() === reverseString.toLowerCase();
};

//O(n): time complexity
//O(1) space complexity
