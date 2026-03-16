// 104. Maximum Depth of Binary Tree

// Top to bottom approach

function maxDepth(root) {
  if (!root) return 0;

  let max = 0;

  function traversal(curr, depth) {
    max = Math.max(depth, max);

    curr.left && traversal(curr.left, depth + 1);
    curr.right && traversal(curr.right, depth + 1);
  }

  traversal(root, 1);

  return max;
}

// Button UP approach

function maxDepth(root) {
  if (!root) return 0;

  let leftMax = maxDepth(root.left);
  let rightMax = maxDepth(root.right);

  return 1 + Math.max(leftMax, rightMax);
}
