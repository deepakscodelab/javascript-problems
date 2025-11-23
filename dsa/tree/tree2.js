// Node class representing each element in the tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Search Tree class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a new value into the BST
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Helper method to recursively insert a node
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Search for a value in the BST
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Helper method to recursively search for a node
  searchNode(node, value) {
    if (node === null) {
      return false;
    }
    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true; // Value found
    }
  }

  // In-order traversal: left, root, right
  inOrder(node = this.root) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  // Pre-order traversal: root, left, right
  preOrder(node = this.root) {
    if (node !== null) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  // Post-order traversal: left, right, root
  postOrder(node = this.root) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }

  // Find the minimum value in the BST
  findMin() {
    let current = this.root;
    while (current && current.left !== null) {
      current = current.left;
    }
    return current ? current.value : null;
  }

  // Find the maximum value in the BST
  findMax() {
    let current = this.root;
    while (current && current.right !== null) {
      current = current.right;
    }
    return current ? current.value : null;
  }

  // Remove a value from the BST
  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  // Helper method to recursively remove a node
  removeNode(node, value) {
    if (node === null) {
      return null;
    }
    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      // Node with only one child or no child
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      // Node with two children: Get the inorder successor
      const minNode = this.findMinNode(node.right);
      node.value = minNode.value;
      node.right = this.removeNode(node.right, minNode.value);
      return node;
    }
  }

  // Find the minimum node (used in node deletion)
  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
}

// Example usage
const bst = new BinarySearchTree();
bst.insert(15);
bst.insert(10);
bst.insert(20);
bst.insert(8);
bst.insert(12);
bst.insert(17);
bst.insert(25);

console.log('In-order traversal:');
bst.inOrder(); // Output: 8 10 12 15 17 20 25

console.log('Search 10:', bst.search(10)); // Output: true
console.log('Search 99:', bst.search(99)); // Output: false

console.log('Minimum value:', bst.findMin()); // Output: 8
console.log('Maximum value:', bst.findMax()); // Output: 25

bst.remove(10);
console.log('In-order traversal after removing 10:');
bst.inOrder(); // Output: 8 12 15 17 20 25
