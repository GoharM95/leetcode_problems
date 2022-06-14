// Given an integer n, return the number of trailing zeroes in n!.
// Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

// Input: n = 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.

// Input: n = 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.

// Input: n = 0
// Output: 0

// 172. Factorial Trailing Zeroes
function trailingZeroes(n) {
  let numberOfFives = 0;

  while (n >= 5) {
    numberOfFives += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }

  return numberOfFives;
}

console.log(trailingZeroes(3));
