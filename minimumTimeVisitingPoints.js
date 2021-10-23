//https://leetcode.com/problems/minimum-time-visiting-all-points/

var minTravelBetweenTwoPoints = function (n, m) {
  return Math.max(Math.abs(m[0] - n[0]), Math.abs(m[1] - n[1]));
};

var minTimeToVisitAllPoints = function (points) {
  let output = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let path = minTravelBetweenTwoPoints(points[i], points[i + 1]);
    output += path;
  }
  return output;
};
