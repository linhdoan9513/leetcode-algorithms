//https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
var getDecimalValue = function (head) {
  let binary = getBinaryRepresentation(head);
  return parseInt(binary, 2);
};

function getBinaryRepresentation(head) {
  if (head.next == null) {
    return head.val.toString();
  }
  return head.val.toString() + getBinaryRepresentation(head.next);
}
