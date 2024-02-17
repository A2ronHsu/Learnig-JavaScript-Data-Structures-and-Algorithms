//uma lista ligada circular pode ser uma lista ligada simples em que o ultimo elemento aponta para this.head ou uma lista duplamente ligada em que o this.head.prev aponta para this.tail e this.tail.next aponta para this.head
//para uma LinkedList nao precisamos mudar nenhuma propriedade, somente sobrescrever alguns metodos ao caso especifico;
import { defaultEquals } from "./defaultEquals.mjs"
import  LinkedList  from "./Pag146 Criando uma LinkedList.mjs"
import { Node } from "./Node.mjs";

class CircularLinkedList extends LinkedList{
    constructor(equalsFn = defaultEquals){
        super(equalsFn)
    }

    insert(element, index){
        if( index >= 0 && index <= this.count){
            const node = new Node(element);
            let current = this.head;
            if( index === 0){
                if( current == null){
                    this.head = node;
                    node.next = this.head;
                }else{
                    this.head = node;
                    node.next = current;
                    current = this.getElementAt(this.size());
                    current.next = this.head;
                }
            }else{
                const previous = this.getElementAt(index-1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    removeAt(index){
        if(index >=0 && index <=this.count){
            const current = this.head;
            if( index === 0){
                if(this.count === 1){
                    this.head = undefined;
                }else{
                    const removed = this.head;
                    this.head = current.next;
                    current = this.getElementAt(this.count-1);
                    current.next = this.head;
                    current = removed;
                }
            }else{

            }
            return true;
        }
        return undefined;
    }





}

let list = new CircularLinkedList();
console.log(list.insert(0,0));
list.insert(1,1);
list.insert(2,2);
console.log(list.insert(3,3));
console.log(list);