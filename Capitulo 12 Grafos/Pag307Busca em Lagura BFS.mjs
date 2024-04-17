import { Queue } from "./Pag129 Criando uma classe Queue.mjs";
import { Colors, initializeColors } from "./util.mjs";
import { Graph } from "./Pag301Criando uma classe Graph.mjs"

export const breadthFirstSearch = (graph, startVertex, callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColors(vertices);
    const queue = new Queue();
    queue.enqueue(startVertex);
    while(!queue.isEmpty()){
        const u = queue.dequeue();
        const neighbors = adjList.get(u);
        color[u] = Colors.GREY;
        for(let i = 0; i < neighbors.length; i++){
            const w = neighbors[i];
            if(color[w]===Colors.WHITE){
                console.log(w);
                color[w] = Colors.GREY
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
        if(callback){
            callback(u);
        }
    }
}

const graph = new Graph();
const myVertices = "ABCDEFGHI";
for(let i = 0; i <myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('A','D');
graph.addEdge('C','D');
graph.addEdge('C','G');
graph.addEdge('D','G');
graph.addEdge('D','H');
graph.addEdge('B','E');
graph.addEdge('B','F');
graph.addEdge('E','I');

//console.log(graph.toString());

const printVertex = value => console.log('visited vertex: '+ value);
breadthFirstSearch(graph, myVertices[0],printVertex);