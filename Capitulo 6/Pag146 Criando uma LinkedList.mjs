import {Node} from "./Node.mjs";
import { defaultEquals } from "./defaultEquals.mjs";
export default class LinkedList{
    constructor(equalsFn = defaultEquals){
        this.count = 0;
        this.head = undefined; //aqui head não aponta para nada
        this.equalsFn = equalsFn;
    }

    //Inserindo elementos no final  da lista ligada
    push(element){
        const node = new Node(element); //criando o novo Node
        let current;    
        if(this.head == null){ // se head for null (lista vazia) atribuimos a head o node;
            this.head = node;
        }else{
            current = this.head; // se a lista não estiver vazia usamos a variavel auxiliar current para
            while (current.next != null){ //obtem o ultimo item da lista
                current = current.next;
            }
            //
            current.next = node; //atribui a current.next o novo Node(element)
        }
        this.count++;
    }

    //removendo um elemento de uma posição especifica da lista ligada
    removeAt(index){
        if(index >= 0 && index < this.count){ // verifica se index é um valor valido para a lista, 0 <= index < this.count
            
            let current = this.head; // guardando o elemento inicial            
            if(index === 0){
                this.head = current.next; //se quisermos remover o primeiro elemento (index == 0)remove o primeiro elemento fazendo head apontar para current.next
            }else{ // para index !== 0 
                let previous; //variavel auxiliar para o elemente anterior a posição index
                for(let i = 0; i < index; i++){
                    previous = current;
                    current = current.next;
                    //faz a ligação de previous com next de current: pula esse elemento para removê-lo previous.next = current.next;
                }
                this.count--;
                return current.element;
            }
            
        }
        return undefined; //se o index nao for valido retorna undefined
    }

}

const list = new LinkedList();

list.push('oi');
list.push('teste');
list.push(3);
console.log(list); // parece um objeto dentro de um objeto que está dentro de um objeto

