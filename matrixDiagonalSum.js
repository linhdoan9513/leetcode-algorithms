//https://leetcode.com/problems/matrix-diagonal-sum/

var diagonalSum = function (mat) {
  let output = 0;
  let primarySum = 0;
  let secondarySum = 0;

  for (let i = 0; i < mat.length; i++) {
    primarySum += mat[i][i];
    secondarySum += mat[i][mat.length - 1 - i];
  }

  if (mat.length % 2 == 1) {
    let commonNumber = mat[(mat.length + 1) / 2 - 1][(mat.length + 1) / 2 - 1];
    output = primarySum + secondarySum - commonNumber;
  } else {
    output = primarySum + secondarySum;
  }

  return output;
};

//O(n) time complexity
//O(1) space complexity
