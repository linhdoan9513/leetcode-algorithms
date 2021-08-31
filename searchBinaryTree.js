//https://leetcode.com/problems/search-in-a-binary-search-tree/
var searchBST = function (root, val) {
  if (root == null) {
    return null;
  }

  if (root.val === val) {
    return root;
  }

  if (val < root.val) {
    return searchBST(root.left, val);
  }
  return searchBST(root.right, val);
};
