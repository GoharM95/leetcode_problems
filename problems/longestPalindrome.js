// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome
// that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

// // 409
// function longestPalindrome(str) {
//   let longest = 0;
//   let valuesObj = {};

//   for (let char of str) {
//     valuesObj[char] = (valuesObj[char] || 0) + 1;

//     if (valuesObj[char] % 2 === 0) {
//       longest += 2;
//     }
//   }
//   return str.length > longest ? longest + 1 : longest;
// }

// console.log(longestPalindrome("abccccdd"));
