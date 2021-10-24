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

let output = [];
//left: keep track how many 1 in the left of the current pointer, right: keep track how many 1 in the right of the current pointer
let left = 0;
let right = 0;
//total left/right: all operation to move all the balls from left/right to current pointer position
let total_left = 0;
let total_right = 0;

//this only loop thru pointer = 0; i in this loop are for the remaining box
for (var i = 1; i < boxes.length; i++) {
  if (boxes[i] == "1") {
    right++;
    total_right += i;
  }
}
output.push(total_right);

//loop thru current pointer
for (var i = 1; i < boxes.length; i++) {
  // current pointer move to next index. minus ball from total operation of the right, plus the ball back to the left operation.
  //
  total_left += left;
  total_right -= right;

  if (boxes[i - 1] == "1") {
    left++;
    total_left++;
  }

  if (boxes[i] == "1") {
    right--;
  }

  output.push(total_left + total_right);
}
return output;
