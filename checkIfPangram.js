//https://leetcode.com/problems/check-if-the-sentence-is-pangram/
var checkIfPangram = function (sentence) {
  let table = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!(sentence[i] in table)) {
      table[sentence[i]] = sentence[i];
    }
  }
  return Object.keys(table).length === 26;
};
