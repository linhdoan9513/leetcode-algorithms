//string sentence with multiple hashtag: "This is my #life, #share, #instagram",
//output: push all words with hashtag into one array
let sentence = "This is my #life, #share, #instagram";

let sentence_split = sentence.split(" ");
let new_arr = [];
var checkHastag = function (sentence_split) {
  for (let i = 0; i < sentence_split.length; i++) {
    if (sentence_split[i].includes("#")) {
      new_arr.push(sentence_split[i]);
    }
  }
  return new_arr;
};
console.log(checkHastag(sentence_split));
