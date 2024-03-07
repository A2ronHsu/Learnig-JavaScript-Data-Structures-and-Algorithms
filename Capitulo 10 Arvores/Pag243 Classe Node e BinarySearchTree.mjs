//uma arvore binária de busca (BST) é uma arvore binária que os filhos a esquerda são sempre valores menores que o filhos (childs) a direita. Os fihos são ligados ao pais (parent) através de arestas (edges). Cada elemento da arvoré será um nó, e o valor que eles contém chamaremos de key.




export class Node{
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

import { Compare, defaultCompare } from "./util.mjs";

export default class BinarySearchTree{
    constructor( compareFn = defaultCompare){
        this.compareFn = compareFn;
        this.root = null;
    }

    insert(key){
        if (this.root == null) this.root = new Node(key);
        else this.insertNode(this.root, key);
    }


    
    insertNode(node, key){
        if(this.compareFn(key, node.key) === Compare.LESS_THAN){
            if(node.left == null){
                node.left == new Node (key);
            }else{
                this.insertNode(node.left, key);
            }
        }else{
            if (node.right == null){
                node.right = new Node(key);
            }else{
                this. insertNode(node.right, key);
            }
        }
    }



    search(key){}

    inOrderTraverse(){}

    preOrderTraverse(){}

    postOrderTraverse(){}

    min(){}

    max(){}

    remove(key){}


}

let tree = new BinarySearchTree();



tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

console.log(tree); 