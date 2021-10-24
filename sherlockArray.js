//https://www.hackerrank.com/challenges/sherlock-and-array/problem?fbclid=IwAR0XC_FaFPXRWMBZH3joEq568Y4t421VxH28TiyVToa1E6k2D0GrurtWgWw

let arr = [5, 6, 8, 11];

const balanceSum = (arr) => {
  for (let pointer = 0; pointer < arr.length; pointer++) {
    //leftSum: calculate all sum before pointer index
    //rightSum: calculate all sum after pointer index
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < pointer; j++) {
      leftSum += arr[j];
    }

    for (let z = pointer + 1; z <= arr.length - 1; z++) {
      rightSum += arr[z];
    }

    if (rightSum === leftSum) {
      return true;
    }
  }
  return false;
};

console.log(balanceSum(arr));

//O(n) because we loop thru each element one
function balancedSums(arr) {
  let leftSum = 0;
  let rightSum = 0;
  if (arr.length === 1) {
    return "YES";
  }
  //calculate rightSum after first index
  for (let pointer = 1; pointer < arr.length; pointer++) {
    rightSum += arr[pointer];
  }
  if (rightSum === 0) {
    return "YES";
  }

  for (let pointer = 1; pointer < arr.length; pointer++) {
    leftSum = leftSum + arr[pointer - 1];
    rightSum = rightSum - arr[pointer];

    if (leftSum === rightSum) {
      return "YES";
    }
  }
  return "NO";
}
