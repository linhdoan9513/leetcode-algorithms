//https://leetcode.com/problems/high-five/

var highFive = function (items) {
  let table = {};
  let results = [];

  for (let i = 0; i < items.length; i++) {
    if (!(items[i][0] in table)) {
      table[items[i][0]] = [items[i][1]];
    } else {
      table[items[i][0]].push(items[i][1]);
    }
  }

  for (const grade in table) {
    let topGrade = table[grade];
    topGrade = topGrade.sort((a, b) => b - a);
    let average = 0;

    for (let i = 0; i < 5; i++) {
      average += table[grade][i];
    }

    average = Math.floor(average / 5);
    results.push([grade, average]);
  }

  return results;
};

//Time complexity: close to O(n)
