// Given a characters array letters that is sorted in non-decreasing order and a character target,
// return the smallest character in the array that is larger than target.
// Note that the letters wrap around.

// For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"

// Input: letters = ["c","f","j"], target = "c"
// Output: "f"

// 744. Find Smallest Letter Greater Than Target

// 1
function nextGreatestLetter(letters, target) {
  for (let letter of letters) {
    if (letter > target) {
      return letter;
    }
  }
  return letters[0];
}

// 2
function nextGreatestLetter(letters, target) {
  const smallestCharIndex = letters.findIndex((letter) => letter > target);

  return letters[smallestCharIndex === -1 ? 0 : smallestCharIndex];
}

console.log(nextGreatestLetter(["a", "b"], "z"));
console.log(nextGreatestLetter(["c", "f", "j", "a"], "c"));
