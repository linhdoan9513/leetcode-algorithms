//https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

var findNumbers = function (nums) {
  let output = 0;
  const map = nums.map((nums) => nums.toString());

  for (let i = 0; i < map.length; i++) {
    if (map[i].length % 2 == 0) {
      output++;
    }
  }
  return output;
};

//O(n) because for each number we have to loop through and convert them to string, the number of operation is equal to total number in the array, also do the same number of operation to check if the digit is even: O(n+n), would still be O(n)

//O(n) space because we have to store all the number in the array and the space will grow linear with respect to the size of the array
