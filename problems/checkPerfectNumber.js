// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.
// A divisor of an integer x is an integer that can divide x evenly.
// Given an integer n, return true if n is a perfect number, otherwise return false.

// Input: num = 28
// Output: true
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// 1, 2, 4, 7, and 14 are all divisors of 28.

// 507
function checkPerfectNumber(n) {
  if (n === 1) {
    return false;
  }

  let sum = 1;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i + n / i;
    }
  }
  return sum === n;
}

console.log(checkPerfectNumber(28));
