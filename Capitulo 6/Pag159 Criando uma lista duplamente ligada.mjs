import LinkedList from "./Pag146 Criando uma LinkedList.mjs";
import { defaultEquals } from "./defaultEquals.mjs";
import { Node } from "./Node.mjs";



//extends é uma palavra-chave usada em classes para criar uma nova classe como uma extensão de uma classe existente, permitindo a herança de propriedades e métodos da classe pai (superclasse). A classe filha (subclasse) herda todos os métodos e propriedades da classe pai. Isso permite que você reutilize o código e estabeleça uma relação de hierarquia entre as classes.

//Em JavaScript, super é uma palavra-chave que é usada dentro de métodos de uma classe filha (subclasse) para chamar métodos da classe pai (superclasse). Isso é especialmente útil quando você está estendendo uma classe e deseja acessar métodos ou propriedades da classe pai. super() pode ser usado para chamar metodos ou o construtor da classe pai.

class DoublyNode extends Node{ //extedendo DoublyNode como filha de Node
    constructor(element, next, prev){
        super(element,next);//chamando as propriedades element e next da função construtora de Node
        this.prev = prev//acrescentando o nova propriedade a DoublyNode
    }
}

class DoublyLinkedList extends LinkedList{ //extendendo DoublyLinkedList como filha de LinkedList
    constructor(equalsFn = defaultEquals){ 
        super(equalsFn); //chamando a função construtora mae
        this.tail = undefined; //acresncentando o final a referencia ao final da lista
    }



    //sobre escrecendo o metodo insert
    insert(element, index){
        if(index>=0 && index<=this.count){
            const node = new DoublyNode(element);
            let current = this.head;
            if(index === 0){
                if(this.head==null){
                    this.head = node;
                    this.tail = node;
                }else{
                    node.next=this.head;
                    current.prev=node;
                    this.head = node;
                }
            }else if(index === this.count){
                current=this.tail;
                node.prev=current;
                current.next = node;
                this.tail = node;
            }else{
            const previous = this.getElementAt(index-1);
            current = previous.next;
            node.next=current;
            previous.next = node;
            current.prev=node;
            node.prev=previous;
        }
        this.count++;
        return true;
    }
        return false;
    }

    removeAt(index){
        if(index >= 0 && index <= this.count ){ //verifica se index é valido, dentro dos limites da lista duplamente ligada
            let current = this.head; // inicializamos current com o primeiro elemento
            if ( index === 0){ //index é o pri
                this.head = current.next; // se quisermos remover o primiro elemento da lista basta fazer this head apontar para o proximo elemento da lista, current.next
                if( this.count === 1){// se a lista tiver somente 1 elemento
                    this.tail = undefined; // faremos tail apontar para undefined, para a remover a referencia do node pelo .prev
                }else{
                    this.head.prev = undefined 
                }
            }else if (index === this.count - 1){ // se quisermos remover o ultimo elemento
                current = this.tail; // current recebe o ultimo elemento tail
                this.tail = current.prev; //fazemos tail apontar para o anterior a current
                this.tail.next = undefined; // e fazemos o anterior a current (que agora é tail) apontar para undefined
            }else{ // se index for um elemento no meio da lista
                current = this.getElementAt(index); //usamos getElementAt para obter o elemento em index e passamos para current
                const previous = current.prev; //previous recebe o anterior a current;
                previous.next = current.next; //fazemos previous.next apontar para current.next, pulando current pela direita
                current.next.prev = previous; // e fazemos current.next.prev, que o anterior ao proximo elemento de current, apontar para prev
            }
            this.count--;//drecrementamos count no final da remoção
            return current.element;// retornamos o elemento removido
            }
        return undefined; // se index não for um valor valido, retornamos undefined
    }
}

const list = new DoublyLinkedList;
list.insert('teste', 0)
list.insert('2',1)
list.insert(3,2)
list.insert(['oi', 'mundo'],3)
list.insert('fim',4)
list.insert('fim',9)



console.log(list);