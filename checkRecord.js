// You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

// 'A': Absent.
// 'L': Late.
// 'P': Present.
// The student is eligible for an attendance award if they meet both of the following criteria:

// The student was absent ('A') for strictly fewer than 2 days total.
// The student was never late ('L') for 3 or more consecutive days.
// Return true if the student is eligible for an attendance award, or false otherwise.

// Input: s = "PPALLP"
// Output: true
// Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.

// 551
// Student Attendance Record I
function checkRecord(str) {
  let lateCount = 0;
  let absentCount = 0;

  for (let char of str) {
    if (char === "A") {
      absentCount++;
    }

    if (absentCount >= 2) {
      return false;
    }

    if (char === "L") {
      lateCount++;
    } else {
      lateCount = 0;
    }

    if (lateCount >= 3) {
      return false;
    }
  }
  return true;
}

console.log(checkRecord("PPALLP"));
console.log(checkRecord("AA"));
