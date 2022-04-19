// Given a string s, return the number of segments in the string.
// A segment is defined to be a contiguous sequence of non-space characters.

// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

// // 434
function countSegments(str) {
  let count = 0;
  let i = 0;

  while (i < str.length) {
    if (str[i] !== " ") {
      count++;
      while (i < str.length && str[i] !== " ") {
        i++;
      }
    }
    i++;
  }
  return count;
}

console.log(countSegments("Hello, my name is John"));
