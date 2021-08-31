//https://leetcode.com/problems/replace-all-digits-with-characters
var shift = (c, x) => {
  return String.fromCharCode(c.charCodeAt() + x);
};

var replaceDigits = function (s) {
  var output = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      output += s[i];
    } else {
      output += shift(s[i - 1], Number(s[i]));
      console.log(output);
    }
  }
  return output;
};
