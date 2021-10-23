//https://leetcode.com/problems/flipping-an-image/

var flipAndInvertEachImage = function (eachImage) {
  var reversedImage = eachImage.reverse();
  var newArray = [];
  for (let i = 0; i < reversedImage.length; i++) {
    if (reversedImage[i] === 0) {
      newArray.push(1);
    } else if (reversedImage[i] === 1) {
      newArray.push(0);
    }
  }
  return newArray;
};

var flipAndInvertImage = function (image) {
  let output = [];
  for (let i = 0; i < image.length; i++) {
    let eachImage = flipAndInvertEachImage(image[i]);
    output.push(eachImage);
  }
  return output;
};

//O(n^2) time complexity because I have loop through each row
//O(n ^2) space because we have to store output for each Image.
