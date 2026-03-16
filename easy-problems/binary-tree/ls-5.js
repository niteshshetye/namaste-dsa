// Path Sum

function pathSum(root, target) {
  function traversal(curr, sum) {
    if (!curr && sum == target) {
      return true;
    }

    curr.left && traversal(curr.left, curr.val + sum);
    curr.right && traversal(curr.right, curr.val + sum);
  }

  traversal(root, 0);

  return false;
}

function hasPathSum(root, target) {
  if (!root.left && !root.right) {
    return root.val === target;
  }

  let leftTreeHasPathSum = hasPathSum(root.left, target - root.val);
  let rightTreeHasPathSum = hasPathSum(root.right, target - root.val);

  return leftTreeHasPathSum || rightTreeHasPathSum;
}
