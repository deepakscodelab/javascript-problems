class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  // Recursive DFS
  dfsRecursive(start, visited = new Set(), result = []) {
    visited.add(start);
    result.push(start);

    this.adjacencyList[start].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        this.dfsRecursive(neighbor, visited, result);
      }
    });

    return result;
  }

  // Iterative DFS
  dfsIterative(start) {
    const stack = [start];
    const visited = new Set();
    const result = [];

    visited.add(start);

    while (stack.length > 0) {
      const vertex = stack.pop();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      });
    }

    return result;
  }
}

// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

console.log('DFS Recursive Traversal:', graph.dfsRecursive('A'));
console.log('DFS Iterative Traversal:', graph.dfsIterative('A'));
