// You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.
// The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on.
// The placement of each athlete determines their rank:

// The 1st place athlete's rank is "Gold Medal".
// The 2nd place athlete's rank is "Silver Medal".
// The 3rd place athlete's rank is "Bronze Medal".
// For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
// Return an array answer of size n where answer[i] is the rank of the ith athlete.

// Input: score = [5,4,3,2,1]
// Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
// Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].

// 506
function findRelativeRanks(score) {
  let ranks = score.slice(0).sort((a, b) => b - a);

  console.log("ranks", ranks); // [5, 4, 3, 2, 1]
  console.log("score", score); // [1, 2, 3, 4, 5]

  return score.map((num, idx) => {
    switch (score[idx]) {
      case ranks[0]:
        return "Gold Medal";
        break;
      case ranks[1]:
        return "Silver Medal";
        break;
      case ranks[2]:
        return "Bronze Medal";
        break;
      default:
        return (ranks.indexOf(num) + 1).toString();
    }
  });
}

console.log(findRelativeRanks([1, 2, 3, 4, 5]));
