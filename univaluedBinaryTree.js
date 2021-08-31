//https://leetcode.com/problems/univalued-binary-tree/

var isUnivalTree = function (root) {
  if (root == null) {
    return true;
  }

  if (!isUnivalTree(root.left) || !isUnivalTree(root.right)) {
    return false;
  }

  if (root.left !== null && root.left.val !== root.val) {
    return false;
  }

  if (root.right !== null && root.right.val !== root.val) {
    return false;
  }

  return true;
};
