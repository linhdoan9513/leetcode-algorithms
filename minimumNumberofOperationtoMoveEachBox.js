//https://leetcode.com/problems minimum-number-of-operations-to-move-all-balls-to-each-box/

var minOperations = function (boxes) {
  let array = [];
  for (let i = 0; i < boxes.length; i++) {
    let operation = 0;
    for (let j = 0; j < boxes.length; j++) {
      if (boxes[j] === "1") {
        operation += Math.abs(j - i);
      }
    }
    array.push(operation);
  }
  return array;
};

//O(N^2) time complexity because we have 1 loop inside another loop that both of them loop thru n elements
//O(n) because we have to store the operation in a new array.
