// Traversal Iterative approach

// Pre order [root, left, right]

function preOrder(root) {
  if (!root) return [];

  let ans = [],
    stack = [root];

  while (stack.length) {
    const curr = stack.pop();
    ans.push(curr.val);
    stack.push(curr.right);
    stack.push(curr.left);
  }

  return ans;
}

// In Order [left, root, right]

function inOrder(root) {
  if (!root) return [];

  let ans = [],
    stack = [];
  let curr = root;

  while (curr || stack.length) {
    // i have to reach left most at the end
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    // pop out first
    curr = stack.pop();
    ans.push(curr.val);
    // go to right
    curr = curr.right;
  }

  return ans;
}

// Post Order [left, right, root] (With 2 stacks)

function postOrder(root) {
  if (!root) return [];

  let ans = [],
    s1 = [root],
    s2 = [];

  while (s1.length) {
    let curr = s1.pop();
    s2.push(curr);
    curr?.left && s1.push(curr.left);
    curr?.right && s1.push(curr.right);
  }

  while (s2.length) {
    ans.push(s2.pop().val);
  }

  return ans;
}

// Post Order [left, right, root] (With 1 stacks)

function postOrder(root) {
  if (!root) return [];

  let ans = [],
    s1 = [],
    curr = root;

  let lastVisited;

  while (s1.length) {
    // go to extream left;
    while (curr) {
      s1.push(curr);
      curr = curr.left;
    }

    let peakNode = s1[s1.length - 1];

    if (peakNode.right && lastVisited !== peakNode.right) {
      curr = peakNode.right;
    } else {
      ans.push(peakNode.val);
      lastVisited = s1.pop();
    }
  }

  return ans;
}
