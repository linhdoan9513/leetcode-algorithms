//https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/

var oddCells = function (m, n, indices) {
  // let array = [[0,0,0], [0,0,0]];
  // use array fill to create a nested array
  // m will be the length of the entire 2d array
  // n will be the length of each nested array, all nested array will be filled with 0
  // indicate the location based on indices [r,c]: if it's r, fill all the index in that index[0,1]: then we will fill all the value in that row: array[1][i] and column would be array[i][ri];

  let arr = Array(m).fill([]);
  let output = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(n).fill(0);
  }

  for (let i = 0; i < indices.length; i++) {
    let row = indices[i][0];
    let column = indices[i][1];

    for (let j = 0; j < arr[row].length; j++) {
      arr[row][j] += 1;
    }

    for (let k = 0; k < arr.length; k++) {
      arr[k][column] += 1;
    }
  }

  let matrix = arr.flat();

  for (let z = 0; z < matrix.length; z++) {
    if (matrix[z] % 2 == 1) {
      output++;
    }
  }
  return output;
};

//Time complexity: O(l) * (m + n)
