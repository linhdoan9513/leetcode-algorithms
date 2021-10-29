//https://leetcode.com/problems/rotate-string/

var rotateString = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  if (s.length === 0 && goal.length === 0) {
    return true;
  }

  s = s + s;

  if (s.includes(goal)) {
    return true;
  } else {
    return false;
  }
};
