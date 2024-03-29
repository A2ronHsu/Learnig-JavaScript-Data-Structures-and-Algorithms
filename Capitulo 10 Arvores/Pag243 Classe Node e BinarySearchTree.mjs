//uma arvore binária de busca (BST) é uma arvore binária que os filhos a esquerda são sempre valores menores que o filhos (childs) a direita. Os fihos são ligados ao pais (parent) através de arestas (edges). Cada elemento da arvoré será um nó, e o valor que eles contém chamaremos de key.




export class Node{
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

import { Compare, defaultCompare } from "./util.mjs";

export class BinarySearchTree{
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
                node.left = new Node(key);
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

    //precorrendo a arvore in-order, em ordem crescente de seus valores
    inOrderTraverse(callback){
        this.inOrderTraverseNode(this.root, callback);
    }
    inOrderTraverseNode(node, callback){
        if( node != null){
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }
    
    //percorrendo a arvore pre-order, visitando o nó atual antes de seus  descendentes.
    preOrderTraverse(callback){
        this.preOrderTraverseNode(this.root, callback);
    }
    preOrderTraverseNode(node, callback){
        if (node != null){
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    //percorrendo a árvore
    postOrderTraverse(callback){
        this.postOrderTraverseNode(this.root, callback);
    }
    postOrderTraverseNode(node, callback){
        if (node != null){
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    min(){
        return this.minNode(this.root);
    }
    minNode(node){
        if(node.left == null) return node;
        return this.minNode(node.left);
    }
    
    max(){
        return this.maxNode(this.root);
    }
    maxNode(node){
        if(node.right == null) return node;
        return this.maxNode(node.right);
    }
    
    search(key){
        return this.searchNode(this.root, key);
    }
    searchNode(node, key){
        if (node == null) return false;
        if ( this.compareFn(key, node.key) === Compare.LESS_THAN){
            return this.searchNode(node.left, key);
        }else if (this.compareFn(key, node.key)=== Compare.BIGGER_THAN){
            return this.searchNode(node.right,key);
        }else{
            return true;
        }
    }


    remove(key){
        return this.removeNode(this.root, key);
    }
    removeNode(node, key){
        if (node == null){
            return null;
        }
        if(this.compareFn(key, node.key) === Compare.LESS_THAN){
            node.left = this.removeNode(node.left, key);
            return node;
        }else if( this.compareFn(key, node.key) === Compare.BIGGER_THAN){
            node.right = this.removeNode(node.right, key)
            return node;
        }else {
            //key é igual a node.key
            //caso 1
            if( node.left == null && node.right == null){
                node = null;
                return node;
            }

            //caso 2
            if(node.left == null){
                node = node.right;
                return node;
            }else if (node.right == null){
                node = node.left;
                return node;
            }

            //caso 3
            const aux = this.minNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }

    }
    
    
}

let tree = new BinarySearchTree();



// tree.insert(11);
// tree.insert(7);
// tree.insert(15);
// tree.insert(5);
// tree.insert(3);
// tree.insert(9);
// tree.insert(8);
// tree.insert(10);
// tree.insert(13);
// tree.insert(12);
// tree.insert(14);
// tree.insert(20);
// tree.insert(18);
// tree.insert(25);
// tree.insert(6);
// tree.insert('a');

// const printNode = (value) => console.log( value);
// //tree.inOrderTraverse(printNode);
// //tree.preOrderTraverse(printNode);
// //tree.postOrderTraverse(printNode);


// // console.log(tree.min());
// // console.log(tree.max());
// console.log(tree.remove('a'));
// console.log(tree.search('a'));
// console.log(tree.remove());



// //console.log(tree); 