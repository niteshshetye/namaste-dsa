// 236. Lowest Common Ancestor of a Binary Tree

function lowestCommonAncestor(root, p, q) {
  let lca = null;

  function traversal(curr) {
    let count = 0;
    if (!curr) return 0;
    let left = traversal(curr.left);
    let right = traversal(curr.right);
    if (curr.val === p.val || curr.val === q.val) {
      ++count;
    }
    count = count + left + right;
    if (count === 2 && !lca) {
      lca = curr;
    }

    return count;
  }

  traversal(root);

  return lca;
}
