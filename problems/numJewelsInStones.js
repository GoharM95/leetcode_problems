// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have.
// You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Input: jewels = "z", stones = "ZZ"
// Output: 0

// 771. Jewels and Stones
function numJewelsInStones(jewels, stones) {
  const stoneCount = {};

  const stonesArr = stones.split("");

  for (let i = 0; i < stonesArr.length; i++) {
    const stone = stonesArr[i];
    stoneCount[stone] = (stoneCount[stone] || 0) + 1;
  }

  let jewelCount = 0;

  jewels.split("").forEach((jewel) => {
    if (stoneCount[jewel]) {
      jewelCount += stoneCount[jewel];
    }
  });

  return jewelCount;
}

console.log(numJewelsInStones("aA", "aAAbbbb"));
