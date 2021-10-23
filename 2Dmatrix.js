//Questions: given a 2D array/matrix, containing character, each character is either one or zero, in fact there is only one single zero, check if target string exist: true, else false

const array = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1],
];

//start at array[i][j + 1] if reach the length of array[i] - restart the position to start at array[i + 1][j];

const findZero = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 0) {
        return true;
      }
    }
  }
  return false;
};

console.log(findZero(array));

//O(1) space because we dont have to store any ouput, only return true or false
//O(n ^2) time complexity because we have to loop through each row of the matrix and then within each role we have to loop each value to check if they are equal to 0.
