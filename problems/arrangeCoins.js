// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins.
// The last row of the staircase may be incomplete.
// Given the integer n, return the number of complete rows of the staircase you will build.

// Input: n = 5
// Output: 2
// Explanation: Because the 3rd row is incomplete, we return 2.

// *
// * *
// * *

// 434
function arrangeCoins(n) {
  let i = 1;
  let coins = 0;
  let count = 0;

  // (n - coins) - amount of remaining coins
  // i - amount cells
  while (n - coins >= i) {
    coins += i;
    i++;
    count++;
  }
  return count;
}

console.log(arrangeCoins(5));
