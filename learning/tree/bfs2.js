class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function bfs(root) {
  if (!root) return [];

  const queue = [root]; // Initialize queue with root node
  const result = []; // Array to store BFS traversal order

  while (queue.length > 0) {
    const node = queue.shift(); // Remove first element from queue
    result.push(node.value);

    // Add left and right children to the queue if they exist
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
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

console.log('BFS Traversal Order:', bfs(root));
