// In a town, there are n people labeled from 1 to n.
// There is a rumor that one of these people is secretly the town judge.
// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.

// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

// Input: n = 2, trust = [[1,2]]
// Output: 2

// Input: n = 3, trust = [[1,3],[2,3]]
// Output: 3

// Input: n = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1

// 997. Find the Town Judge
function findJudge(n, trust) {
  let trustCounts = new Array(n + 1).fill(0);

  for (let [i, j] of trust) {
    trustCounts[i] -= 1;
    trustCounts[j] += 1;
  }

  for (let i = 1; i < trustCounts.length; i++) {
    if (trustCounts[i] === n - 1) {
      return i;
    }
  }

  return -1;
}

console.log(findJudge(2, [[1, 2]]));
