//https://leetcode.com/problems/divisor-game/
//Dynamic programming:
var divisorGame = function (N) {
  const dp = Array(N + 1).fill(false);

  for (let i = 2; i <= N; i++) {
    for (let j = 1; j < i; i++) {
      console.log(i, j, !dp[i - j]);
      if (i % j === 0 && !dp[i - j]) {
        dp[i] = true;
        break;
      }
    }
  }
  console.log(dp[5], dp.length);
  return dp[N];
};

//shorter version:
// if (N% 2 === 0) ? true: false
