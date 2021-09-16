//https://leetcode.com/problems/find-all-the-lonely-nodes/

var getLonelyNodes = function (root) {
  if (root.left === null && root.right === null) {
    return [];
  }

  if (root.left === null) {
    return getLonelyNodes(root.right).concat([root.right.val]);
  }

  if (root.right === null) {
    return getLonelyNodes(root.left).concat([root.left.val]);
  }

  return getLonelyNodes(root.left).concat(getLonelyNodes(root.right));
};
