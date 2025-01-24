class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Preorder Traversal (Root -> Left -> Right)
function dfsPreorder(node, result = []) {
  if (node) {
    result.push(node.value); // Visit root
    dfsPreorder(node.left, result); // Traverse left subtree
    dfsPreorder(node.right, result); // Traverse right subtree
  }
  return result;
}

// Inorder Traversal (Left -> Root -> Right)
function dfsInorder(node, result = []) {
  if (node) {
    dfsInorder(node.left, result); // Traverse left subtree
    result.push(node.value); // Visit root
    dfsInorder(node.right, result); // Traverse right subtree
  }
  return result;
}

// Postorder Traversal (Left -> Right -> Root)
function dfsPostorder(node, result = []) {
  if (node) {
    dfsPostorder(node.left, result); // Traverse left subtree
    dfsPostorder(node.right, result); // Traverse right subtree
    result.push(node.value); // Visit root
  }
  return result;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log('DFS Preorder:', dfsPreorder(root)); // Output: [1, 2, 4, 5, 3, 6, 7]
console.log('DFS Inorder:', dfsInorder(root)); // Output: [4, 2, 5, 1, 6, 3, 7]
console.log('DFS Postorder:', dfsPostorder(root)); // Output: [4, 5, 2, 6, 7, 3, 1]
