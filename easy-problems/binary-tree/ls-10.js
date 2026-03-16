// 572. Subtree of Another Tree

function isSearize(root, subRoot) {}

function serialize(root) {
  let hash = "";

  function traversal(curr) {
    if (!curr) {
      hash += "#-";
      return;
    }

    hash += `${curr.val}-`;

    traversal(curr.left);
    traversal(curr.right);
  }

  traversal(root);

  return hash;
}
