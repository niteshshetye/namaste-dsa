// Level order traversal of a binary tree using queue (BFS) and recurrsion

/**
 *              1
 *          2          3
 *      4       5   6       7
 * 8
 */

// Time complexity in iterative approach is O(n) where n is the number of nodes in the tree
// Space complexity in iterative : O(n) where n is the number of nodes in the tree
function levelOrder(root) {
  if (!root) return [];

  let q = [root],
    ans = [];

  while (q.length) {
    let levelArr = [];
    let levelSize = q.length;

    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();
      levelArr.push(curr.val);
      q.push(curr.left);
      q.push(curr.right);
    }

    ans.push(levelArr);
  }

  return ans;
}

function levelOrderRecurrsion(root) {
  if (!root) return [];

  let ans = [];

  function traversal(curr, level) {
    if (!ans[level]) ans[level] = [];
    ans[level].push(curr.val);
    curr.left && traversal(curr.left, level + 1);
    curr.right && traversal(curr.right, level + 1);
  }

  traversal(root, 0);

  return ans;
}
