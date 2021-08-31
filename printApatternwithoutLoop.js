//https://www.geeksforgeeks.org/print-a-pattern-without-using-any-loop/
let output = [];
let check = (n) => {
  var temp_n = n;
  output.push(n);
  var checkRange = false;
  while (temp_n <= n) {
    if (!checkRange) {
      temp_n -= 5;
      output.push(temp_n);
      checkRange = temp_n <= 0;
    } else {
      temp_n += 5;
      output.push(temp_n);
    }

    if (temp_n === n) {
      break;
    }
  }
  return output;
};
