import {Node} from "./Node.mjs";
import { defaultEquals } from "./defaultEquals.mjs";
export class LinkedList{
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
            current = this.head; // se a lista não estiver vazia usamos a variavel auxiliar current para iterar sobre a lista ligada
            while (current.next != null){ //obtem o ultimo item da lista, percorrento de current até encontra next == null
                current = current.next;
            }
            //
            current.next = node; //atribui a current.next o novo Node(element)
        }
        this.count++;
    }
    
    // //removendo um elemento de uma posição especifica da lista ligada
    // removeAt(index){
    //     if(index >= 0 && index < this.count){ // verifica se index é um valor valido para a lista, 0 <= index < this.count
    //         let current = this.head; // guardando o elemento inicial            
    //         if(index === 0){
    //             this.head = current.next; //se quisermos remover o primeiro elemento (index == 0)remove o primeiro elemento fazendo head apontar para current.next, que é null
    //         }else{ // para index !== 0 
    //             let previous; //variavel auxiliar para o elemente anterior a posição index
    //             for(let i = 0; i < index; i++){ //iteramos até a current chegar index que queremos remover
    //                 previous = current; 
    //                 current = current.next;
    //             }
    //             previous.next = current.next; //fazemos previous.next apontar para current.next, removendo current da lista ligada, assim current ficará perdido na memoria e estará disponivel para limpeza pelo garbage collector
    //         }
    //         this.count--; 
    //         return current.element; //retorna o current removido  
    //     }
    //     return undefined; //se o index nao for valido retorna undefined
    // }
    
    //percorrendo a lista ligada com um laço até alcançar posição desejada

    getElementAt(index){
        if( index >= 0 && index <=this.count){ 
            let node = this.head; //iniciamos node com o primeiro elemento da lista
            for(let i = 0; i < index; i++){//iteramos pelos elementos da lista ligada
                node = node.next; 
            }
            return node; //retornamos node no index
        }
        return undefined; // se index estiver fora dos limites da lista ligada retornamos undefined
    }

    //refatorando removeAt() com getElementAt()
    removeAt(index){
        if( index >= 0 && index <= this.count){ //validando index dentro dos limites da lista ligada
            let current = this.head; //current é o primeiro elemento da lista aqui
            if( index === 0){ //removendo o primeiro elemento
                this.head === current.next; //fazendo head apontar para o proximo elemento, removendo o elemento atual
            }else{
                const previous = this.getElementAt(index-1); //atribuindo a previous a previous o node anterior ao que queremos remover
                current = previous.next; //current é o elemento que queremos remover
                previous.next = current.next; // removendo current da lista
            }
            this.count--;
            return current.element; //retornando o elemento removido
        }
        return undefined; // se index nao for valido retorna undefined
    }

    //inserindo um elemento em qualquer posição
    insert(element, index){
        if( index >= 0 && index <= this.count){ //se a index for válida
            const node = new Node(element);// node recebe o novo elemento
            if (index === 0 ){ //se quisermos inserir no primeiro elemento
                const current = this.head;// current recebe o primeiro elemento da lista, this.head
                node.next = current  //node.next recebe current, que era o primeiro elemento da lista
                this.head = node;//this.head recebe, node, fazendo o node o novo elemento da lista
            }else{ // se quisermos inserir em outra posição (index != 0)
                const previous = this.getElementAt(index-1); //previous recebe o elemento anterior no index
                const current = previous.next; // current recebe o elemento em index atraves de preivous.next;
                previous.next = node; //fazemos o elemento anterior apontar para node
                node.next= current;// e fazemos node aportar para o valor atual
            }
            this.count++;
            return true;  
        }
        return false;
    }

    //devolvendo a posição de um elemento
    indexOf(element){
        let current = this.head; // current recebe o primeiro elemento
        for ( let i = 0; i < this.count && current != null; i++){ //iteramos sobre enquanto nao chegar chegamos ao indice final e ,por precaução, current for diferente de null (ultimo element)
            if(this.equalsFn(element, current.element)){ //testamos com equanlsFn=defaultEquals se element e current.element são estritamente iguais
                return i; // se True retoranmos i que representa o indexOf do elemento
            }
            current = current.next;// se element e current.element forem diferentes current recebe current next para a proxima interação
        }
        return -1;//se o element não existir na lista, retorna -1
    }

    //removendo um elemento da lista
    remove(element){
        const index = this.indexOf(element); //encontramos aqui a posição do elemento a ser removido
        return this.removeAt(index);//e removemos o elemento do index
    }

    //a lista está vazia?
    isEmpty(){
        return this.count === 0;
    }

    //tamanho da lista Ligada
    size(){
        return this.count;
    }

    //qual o primeiro elemento?
    getHead(){
        return this.head;
    }

    //convertendo todos os elemento em uma string separados por ,
    toString(){
        if (this.head == null) return ''; // se a lista estiver vazia retornar uma string vazia
        let objString=`${this.head.element}`; //inicializamos objString com o primeiro elemento
        let current = this.head.next; // current recebe o proximo elemento
        for(let i=0; i < this.count && current != null; i++){ //iteramos sobre a lista ligada com essas condições
            objString = `${objString},${current.element}`; //concatenamos os elementos em uma string
            current=current.next;//passamos para o proximo elemento
        }
        return objString;
    }
}

// const list = new LinkedList();

// list.push('oi');
// list.push('teste');
// list.push('ABC');
// list.push(3);
// list.insert('inserted',0);

// console.log(list.indexOf(3));
// console.log(list.isEmpty());
// console.log(list.size());
// console.log(list.getHead());
// console.log(list.toString());


// console.log(list.removeAt(1));
// console.log(list); // parece um objeto dentro de um objeto que está dentro de um objeto