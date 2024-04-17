//Uma fila é uma coleção  ordenada de itens baseada em FIFO (First in First Out), também conhecido como fist-come-first-served. A adição de novos elementos na fila é feita pela cauda (tail) e a remoção, na frente. O elemento mais recente deve esperar no final dela (na cauda, tail).

//vamos criar uma classe para representar no fila, a classe Queue

export class Queue{
    constructor(){
        this.count = 0; //para controlar o tamanho da fila usamos count
        this.lowestCount=0; //para manter o controle sobre o primeiro elemento da fila usamos lowestCount
        this.items ={}; // nossa classe será baseada num objeto
    }

    enqueue(element){   //esse metodo adiciona um novo elemento na cauda
        this.items[this.count] = element; //adicionando element no objeto items na posição this.count
        this.count++; // incrementamos o tamanho da fila para receber o proximo elemento
    } 
    dequeue(){ //esse metodo retira o primeiro elemento da fila usando o lowestCount
        if (this.isEmpty()) return undefined; //testando se o objeto está vazio
        const result = this.items[this.lowestCount]; //se nao estiver vazio queremos armazenar temporariamente o primeiro elemento em result
        delete this.items[this.lowestCount];//para então deletar o primeiro elemento
        this.lowestCount++;//incrementar a posição do primeiro elemento
        return result; //retornar o elemento removido
    }

    //com enqueue e dequeue definidos, temos a estruta basica para seguir o principio FIFO

    peek(){ // espiando o primeiro da fila
        if (this.isEmpty()) {
            return undefined;
        }
        
        return this.items[this.lowestCount]; 
    }

    isEmpty(){ // a fila está vazia?
       return this.count-this.lowestCount === 0;
       //tambem poderiamos escreve sizer assim
       //return this.size === 0;
    }
    size(){ //tamanho da fila
        return this.count - this.lowestCount;
    }

    clear(){ //limpando a fila
        this.count = 0;
        this.lowestCount = 0;
        this.items ={};
    }

    toString(){
        if(this.isEmpty()) return '';
        let objString = `${this.items[this.lowestCount]}`;
        for(let i=this.lowestCount+1; i<this.count; i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }

}

/*
const queue = new Queue();
let temp = '';

console.log(queue.isEmpty());


queue.enqueue(0);
queue.enqueue(1);
queue.enqueue('2');
queue.enqueue('3');
queue.enqueue(true);

console.log(queue.peek());
console.log(queue);

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.peek());
console.log(queue);

queue.enqueue('H');
queue.enqueue('E');
queue.enqueue('L');
queue.enqueue('L');
queue.enqueue('O');
const string = queue.toString();
console.log(string);
console.log(queue);

console.log(queue.size());
//queue.clear();
console.log(queue.size());



console.log(queue.isEmpty());
*/
//para saber mais sobre filas
//https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/