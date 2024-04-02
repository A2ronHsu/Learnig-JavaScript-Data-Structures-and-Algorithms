import { BinarySearchTree, Node } from "./Pag243 Classe Node e BinarySearchTree.mjs";
import { Compare, defaultCompare } from "./util.mjs";

const Colors = {
    RED: 1,
    BLACK:2
}

class RedBlackNode extends Node{
    constructor(key){
        super(key);
        this.key = key;
        this.color = Colors.RED;
        this.parent = null;
    }

    isRed(){
        return this.color === Colors.RED;
    }
}


class RedBlackTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare){
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }

    insert(key){
        if(this.root == null){
            this.root = new Node(key);
            this.root.color = Colors.BLACK;
        }else{
            const newNode = this.insertNode(this.root,key);
            this.fixTreeProperties(newNode);
        }
    }
    insertNode(node,key){
        if(this.compareFn(key, node.key) === Compare.LESS_THAN){
            if(node.left == null){
                node.left = new RedBlackNode(key)
                node.left.parent = node;
                return node.left;
            }else{
                return this.insertNode(node.left,key);
            }
        }else{
            if(node.right == null){
                node.right = new RedBlackNode(key);
                node.right.parent = node;
                return node.right;
            }else{
                return this.insertNode(node.right, key);
            }
        } 
    }

    fixTreeProperties(node){
        while(node && node.parent && node.parent.color.isRed() && node.color !==Colors.BLACK){
            let parent = node.parent;
            const grandParent = parent.parent;

            //Caso A: o pai é  o filho à esquerda
            if(grandParent && grandParent.left === parent){
                const uncle = grandParent.right;
                //caso 1A: o tio do nó tambem é vermelhor - basta recolorir
                if(uncle && uncle.color === Colors.RED){
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grandParent;
                }else{
                    //caso 2A: o nó é o filho à direita - rotação à esquerda
                    //caso 3A: o nó é o filho à esquerda - rotação direita
                }
            }
            else{
                //caso B: o pai é o filho à direita
                const uncle = grandParent.left;
                //caso 1b: o tio é vermelho - basta recolorir
                if (uncle && uncle.color === colorRED){
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grandParent;
                }
                else{
                    //caso 2B: o nó é o filho à esquerda - rotação a direita
                    //caso 3B: o nó é o filho à direita - rotação à esquerda
                }
            }
        }
        this.root.color = Colors.BLACK;
    }

}