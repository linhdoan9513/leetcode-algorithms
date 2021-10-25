var maxWidthOfVerticalArea = function (points) {
  let sorted = points.sort((a, b) => {
    return a[0] - b[0];
  });

  let maxArea = points[1][0] - points[0][0];
  for (let i = 0; i < points.length - 1; i++) {
    let currentArea = points[i + 1][0] - points[i][0];
    if (currentArea > maxArea) {
      maxArea = currentArea;
    }
  }
  return maxArea;
};

//O(n log n): sort, quick sort: in-place sorting algorithm,It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.
//O(1) space
