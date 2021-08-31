//https://leetcode.com/problems/count-of-matches-in-tournament/
var numberOfMatches = function (n) {
  var team = n;
  var match = 0;
  while (team > 1)
    if (team % 2 === 0) {
      match = team / 2 + match;
      team = team / 2;
    } else {
      match = (team - 1) / 2 + match;
      team = (team - 1) / 2 + 1;
    }
  return match;
};
