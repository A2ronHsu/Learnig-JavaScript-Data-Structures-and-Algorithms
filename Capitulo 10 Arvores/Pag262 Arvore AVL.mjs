import { BinarySearchTree, Node } from "./Pag243 Classe Node e BinarySearchTree.mjs"
import { Compare, defaultCompare } from "./util.mjs"

//CONSTANTE PARA ENUMERAR OS CASOS 
const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED:3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5,
    }




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
    return result;
    }

    //fator de balanceamento: a diferenca de altura da direita de um nó com a esquerda dele deve ser igual a -1, 0 ou 1 para se considerar balanceada, caso não for esse o valor da diferença o nó está desbalanceado. 
    //a seguir vamos fazer um codigo que analisa o fator de balanço de um nó;
    getBalanceFactor(node){

    
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

    insert(key){
        this.root = this.insertNode(this.root, key);   
    }
    insertNode(node, key){
        if(node == null){
            return new Node(key);
        }else if(this.compareFn(key,node.key) === Compare.LESS_THAN){
            node.left = this.insertNode(node.left,key);
        }else if(this.compareFn(key,node.key) === Compare.BIGGER_THAN){
            node.right = this.insertNode(node.right,key);
        }else{
            return node;
        }

        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT){
            if(this.compareFn(key,node.left.key) === Compare.LESS_THAN){
                node = this.rotationLL(node)
            }else{
                return this.rotationLR(node);
            }
        }

        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT){
            if(this.compareFn(key, node.right.key) === Compare.BIGGER_THAN){
                node = this.rotationRR(node);
            }else{
                return this.rotationRL(node);
            }
        }

        return node;
    }

    removeNode(node, key){
        node = super.removeNode(node, key);
        if(node == null){
            return node;
        }
        
        const balanceFactor = this.getBalanceFactor(node);
        if(balanceFactor === BalanceFactor.UNBALANCED_LEFT){
            const balanceFactorLeft = this.getBalanceFactor(node.left);
            if(balanceFactorLeft === BalanceFactor.BALANCED || balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT){
                return this.rotationLL(node);
            }
            if(balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT){
                return this.rotationLR(node);
            }
        }
        if(balanceFactor === BalanceFactor.UNBALANCED_RIGHT){
            const balanceFactorRight = this.getBalanceFactor(node.right);
            if(balanceFactorRight === BalanceFactor.BALANCED || balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT){
                return this.rotationRR
            }
            if( balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT){
                return this.rotationRL(node.right);
            }
        }
        return node;
    }
}

let tree = new AVLTree();

tree.insert(70);
tree.insert(50);
tree.insert(80);
tree.insert(72);
tree.insert(90);
tree.insert(75);
tree.remove(80);

//console.log(tree.getNodeHeight(tree.root));
console.log(tree);
console.log(tree.getBalanceFactor(tree.root));