// Traversal Recursive approach

// Pre order [root, left, right]

function preOrder(curr, ans) {
  if (!curr) return;
  ans.push(curr.val);
  preOrder(curr.left, ans);
  preOrder(curr.right, ans);
}

// In order [left, root, right]

function inOrder(curr, ans) {
  if (!curr) return;
  inOrder(curr.left, ans);
  ans.push(curr.val);
  inOrder(curr.right, ans);
}

// Post order [left, right, root]

function postOrder(curr, ans) {
  if (!curr) return;
  postOrder(curr.left, ans);
  postOrder(curr.right, ans);
  ans.push(curr.val);
}

function traverse(root, callback) {
  let ans = [];

  callback(root, ans);

  return ans;
}

traverse(root, preOrder);
traverse(root, inOrder);
traverse(root, postOrder);
