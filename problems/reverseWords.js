// Given a string s, reverse the order of characters in each word within a sentence
// while still preserving whitespace and initial word order.

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// 557
// Reverse Words in a String
function reverseWords(str) {
  const strArr = str.split(" ");
  const reversedArr = strArr.map((word) => word.split("").reverse().join(""));
  return reversedArr.join(" ");
}

console.log(reverseWords("Let's take LeetCode contest"));
