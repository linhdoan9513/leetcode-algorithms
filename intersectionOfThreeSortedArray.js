//https://leetcode.com/problems/intersection-of-three-sorted-arrays/

//Time complexity: O(n log n), space complexity: O(n);

var arraysIntersection = function (arr1, arr2, arr3) {
  let table = {};
  let output = [];
  for (let i = 0; i < arr1.length; i++) {
    table[arr1[i]] = 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] in table) {
      table[arr2[i]] = table[arr2[i]] + 1;
    } else {
      table[arr2[i]] = 1;
    }
  }

  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] in table) {
      table[arr3[i]] = table[arr3[i]] + 1;
    } else {
      table[arr3[i]] = 1;
    }
  }

  for (const prop in table) {
    console.log(table[prop]);
    if (table[prop] === 3) {
      output.push(prop);
    }
  }
  return output;
};
