// 103. Binary Tree Zigzag Level Order Traversal

function zigZagLevelOrder(root) {
  if (!root) return [];

  let q = [root],
    ans = [];

  let reverse = false;

  while (q.length) {
    let levelArray = [];
    let levelSize = q.length;

    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();

      reverse === true
        ? levelArray.unshift(curr.val)
        : levelArray.push(curr.val);

      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }

    reverse = !reverse;
    ans.push(levelArray);
  }

  return ans;
}

function zigZagLevelOrderRecursion(root) {
  let ans = [];

  if (!root) return ans;

  function traversal(curr, level) {
    if (!ans[level]) ans[level] = [];

    if (level % 2 === 0) ans[level].push(curr.val);
    else ans[level].unshift(curr.val);

    curr.left && traversal(curr.left, level + 1);
    curr.right && traversal(curr.right, level + 1);
  }

  traversal(root, 0);

  return ans;
}
