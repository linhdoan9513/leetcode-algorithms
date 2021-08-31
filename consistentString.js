//https://leetcode.com/problems/count-the-number-of-consistent-strings/

//Optimal Solution: time complexity O(n)
var stringContains = function (string, char) {
  for (var i in string) {
    if (string[i] == char) {
      return true;
    }
  }
  return false;
};

var isConsistent = function (allowed, word) {
  for (var i in word) {
    if (!stringContains(allowed, word[i])) {
      return false;
    }
  }
  return true;
};

var countConsistentStrings = function (allowed, words) {
  var count = 0;
  for (var i in words) {
    if (isConsistent(allowed, words[i])) {
      count++;
    }
  }
  return count;
};


// less optimal using nested loops
var countConsistentStrings = function(allowed, words) {
    var count = 0;  
    for (var i = 0; i < words.length; i++) {
        var isConsistent = true;
        for (var z = 0; z < words[i].length; z++) {
            if (!allowed.includes(words[i][z])) {
                isConsistent = false;
                break;
            }
        }
        if (isConsistent) {
            count ++; 
        }
    }
    return count;
};