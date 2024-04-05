import Dictionary from "./Pag197Criando a classe Dictionary.mjs";

class Graph{
    constructor(isDirected = false){
        this.isDirected = isDirected;
        this.vertices=[];
        this.adjList= new Dictionary();
    }

    addVertex(v){
        if(!this.vertices.includes(v)){
            this.vertices.push(v);
            this.adjList.set(v,[])
        }
    }

    addEdge(v,w){
        if(!this.adjList.get(v)){
            this.addVertex(v);
        }
        if(!this.adjList.get(w)){
            this.addVertex(w);
        }
        this.adjList.get(v).push(w);
        if(!this.isDirected){
            this.adjList.get(w).push(v);
        }
    }
    
}