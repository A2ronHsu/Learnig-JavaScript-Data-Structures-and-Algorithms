//implementando uma BFS melhorado:
import { Graph } from "./Pag301Criando uma classe Graph.mjs"
import { initializeColors, Colors } from "./util.mjs";
import { Queue } from "./Pag129 Criando uma classe Queue.mjs";
import { Stack } from "./Pag111 Criando uma classe Stack baseada em array.mjs";

const BFS = (graph = new Graph(), startVertex) => {

    const vertices  = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColors(vertices);
    const queue = new Queue();
    const distances = {};
    const predecessors = {};
    queue.enqueue(startVertex);

    for( let i = 0; i < vertices.length; i++){
        distances[vertices[i]] = 0;
        predecessors[vertices[i]] = null;
    }



    while (!queue.isEmpty()){
        const u = queue.dequeue();
        const neighbors = adjList.get(u);
        color[u]= Colors.GREY;
        for (let i = 0; i < neighbors.length; i++){
            const w = neighbors[i];
            if(color[w]===Colors.WHITE){
                color[w] = Colors.GREY;
                distances[w] = distances[u]+1;
                predecessors[w] = u;
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
    }



    return{
        distances,
        predecessors
    };
};



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

const shortestPathA = BFS(graph, myVertices[0]);
console.log(shortestPathA);

const fromVertex = myVertices[0];
for(let i = 1; i < myVertices.length;i++){
    const toVertex = myVertices[i];
    const path = new Stack();
    for(let v=toVertex; v!==fromVertex; v=shortestPathA.predecessors[v]){
        path.push(v);
    }
    path.push(fromVertex);
    let s = path.pop();
    while(!path.isEmpty()){
        s+=' - ' + path.pop();
    }
    console.log(s);
}

