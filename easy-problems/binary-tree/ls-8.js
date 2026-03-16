// 110. Balanced Binary Tree

function isBalancedTree(root) {
  let ans = true;

  // height is max from left or right + 1
  function calculateHeight(curr) {
    if (!curr) return 0;

    let leftHeight = calculateHeight(curr.left);
    let rightHeight = calculateHeight(curr.right);

    // Main goal is to identify is height diff is >= 1
    if (Math.abs(leftHeight - rightHeight) >= 1) {
      ans = false;
    }

    return 1 + Math.max(leftHeight, rightHeight);
  }

  calculateHeight(root);

  return ans;
}
