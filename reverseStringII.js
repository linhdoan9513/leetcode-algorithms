//https://leetcode.com/problems/reverse-string-ii/

var reverseStr = function (s, k) {
  const string = s.split("");
  let output = [];
  let d = 2 * k;

  for (let i = 0; i < string.length; i += d) {
    const arr = string.slice(i, i + d);
    const firstHalf = arr.slice(0, k).reverse();
    output.push(...firstHalf);
    const secondHalf = arr.slice(k);
    output.push(...secondHalf);
  }

  return output.join("");
};
