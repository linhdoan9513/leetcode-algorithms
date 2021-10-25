//https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/

var minMovesToSeat = function (seats, students) {
  let sortedSeats = seats.sort((a, b) => a - b);
  let sortedStudents = students.sort((a, b) => a - b);
  let output = 0;
  for (let i = 0; i < seats.length; i++) {
    let moves = Math.abs(students[i] - seats[i]);
    output += moves;
  }
  return output;
};

//O(n log n) sort
//O(1) space
