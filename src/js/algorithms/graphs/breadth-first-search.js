// create a queue Q
// mark v as discovered and enqueue v into Q
// while Q is not emptyu, perform
//  dequeue u from Q
//  mark u as discoevered
// enqueue all unvisiited neightbors
// mark u as explored

const Queue = require("../../data-structures/queue/queue");

function breadthFirstSeach(graph, start, callback = null) {
  const queue = new Queue();
  const adjList = graph.getAdjList();
  const vertices = graph.getVertices();

  const distances = {};
  const predecessors = {};

  vertices.forEach(vertex => {
    distances[vertex] = undefined;
    predecessors[vertex] = undefined;
  });

  queue.enqueue(start);
  distance[start] = 0;

  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u);

    neighbors.forEach(neighbor => {
      if (distances[neighbor] === undefined) {
        distance[neighbor] = distance[u] + 1;
        predecessors[neighbor] = u;
        queue.enqueue(neighbor);
      }
    });
    if (callback) {
      callback(u);
    }
  }
  return { distances, neighbors };
}

module.exports = { breadthFirstSeach };
