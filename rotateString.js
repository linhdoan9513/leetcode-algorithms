//https://leetcode.com/problems/rotate-string
var rotateString = function (A, B) {
  if (A.length !== B.length) {
    return false;
  }

  if (A.length === 0 && B.length === 0) {
    return true;
  }

  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < B.length; j++) {
      if (A === B) {
        return true;
      }
      if (A[i] === B[j]) {
        B = B[B.length - 1] + B.slice(0, B.length - 1);
      }
    }
  }
  return false;
};

//More optimal solution: 
var rotateString = function (A, B) {
  if (A.length !== B.length) {
    return false;
  }

  if (A.length === 0 && B.length === 0) {
    return true;
  }

  A = A + A;
  if (A.includes(B)) {
    return true;
  }
  return false;
};
