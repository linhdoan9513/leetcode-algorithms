//https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/

var countGoodRectangles = function (rectangles) {
  let maxLenArray = [];
  for (let i = 0; i < rectangles.length; i++) {
    let square = Math.min(rectangles[i][0], rectangles[i][1]);
    maxLenArray.push(square);
  }

  let maxLen = Math.max(...maxLenArray);
  let output = 0;

  for (let i = 0; i < maxLenArray.length; i++) {
    if (maxLenArray[i] === maxLen) {
      output += 1;
    }
  }
  return output;
};

//output: O(n) time complexity
// o(n) space complexcity
