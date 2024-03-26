import BinarySearchTree from "./Pag243 Classe Node e BinarySearchTree.mjs"
import { defaultCompare } from "./util.mjs"

class AVLTree extends BinarySearchTree{
    constructor(compareFn = defaultCompare){
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }
    
    //Altura de um nó: valor maximo de arestas do root a folha
    getNodeHeight(node){
    if(node == null) return -1;
    let result = Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;        
    console.log(result);
    return result;
    }

    //fator de balanceamento: a diferenca de altura da direita de um nó com a esquerda dele deve ser igual a -1, 0 ou 1 para se considerar balanceada, caso não for esse o valor da diferença o nó está desbalanceado. 
    //a seguir vamos fazer um codigo que analisa o fator de balanço de um nó;
    getBalanceFactor(node){
        //CONSTANTE PARA ENUMERAR OS CASOS 
        const BalanceFactor = {
        UNBALANCED_RIGHT: 1,
        SLIGHTLY_UNBALANCED_RIGHT: 2,
        BALANCED:3,
        SLIGHTLY_UNBALANCED_LEFT: 4,
        UNBALANCED_LEFT: 5,
        }
        const heightDifference = this.getNodeHeight(node.left)-this.getNodeHeight(node.right);
        switch(heightDifference){
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
            default:
                return BalanceFactor.BALANCED;;
        }
    }
       
    rotationLL(node){
        const tmp = node.left;
        node.left=tmp.right;
        tmp.right = node;
        return tmp;
    }

    rotationRR(node){
        const tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
    }

    rotationLR(node){
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    }

    rotationRL(node){
        node.right = this.rotationLL(node.right);
        return this.rotationRR(node);
    }

}

let tree = new AVLTree();

tree.insert(3);
tree.insert(2);
tree.insert(6);
tree.insert(5);
tree.insert(4);
tree.insert(7);

console.log(tree.getNodeHeight(tree.root));