
/***************************PREORDER ARRAY TO TREE CONVERTER **********************/

function TreeNode(val, left, right) {
  let node = {};
  node.val = val === undefined ? 0 : val;
  node.left = left === undefined ? null : left;
  node.right = right === undefined ? null : right;
  return node;
}

var preorderArrayToTree = function(arr) {
  let tree = new TreeNode(arr[0]), ln=arr.length;
  if (!arr[0]) return null;

  function build(tree, i) {
    if (!tree  || i >= ln) return i;
    tree.left  = arr[i] ? TreeNode(arr[i]) : null;
    let nextR = build(tree.left, i+1);
    tree.right = nextR>= ln || !arr[nextR] ? null : TreeNode(arr[nextR]);
    let nextL =  build(tree.right, nextR+1)
    return nextL

  }

  build(tree, 1);
  return tree;
}



preorderArrayToTree([1, 2, 4, null, null, 5, null, null, 10]);
