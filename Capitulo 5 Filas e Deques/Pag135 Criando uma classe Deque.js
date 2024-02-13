//A estrutura de dados de deque é uma fila de duas pontas. Deque é abreviação double-endend-queue, é uma fila que nos permite inserir e remover elementos do final ou da frente da fila. É como uma combinação dos principios LIFO e FIFO, uma combinação de pilha e fila.

//vamos criar uma classe Deque

class Deque{
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items={};
    }
    // vamos declarar addBack, size e isEmpty primeiro para usar na função addFront
    addBack(element){ //adiciona o elemento do final do deque
        this.items[this.count]=element;
        this.count++;
    };
    
    size(){ //tamanho do deque
        return this.count - this.lowestCount;
    };

    isEmpty(){ // o deque está vazio?
        return this.size() === 0;
    };

    addFront(element){ //adicionando o elemento no começo do deque
        if(this.isEmpty()){  // se o deque estiver vazio é só usar o addBack()
            this.addBack(element)}
        else if(this.lowestCount > 0) { // se já se removeu algum elemento do começo do deque temos que decrementar a menor posição e assim atribuir o elemento nessa posição.
            this.lowestCount--;  
            this.items[this.lowestCount]=element;
        }else{
            for (let i=this.count; i > 0; i--){ //se o primeiro elemento está na posiçao 0 podemos incrementar todo o objeto para o final do deque e atribuir o elemento na posição 0;  poderiamos usar posicoes negativas com outra logica
                this.items[i] = this.items[i-1]; //movendo todo o objeto para o final do deque
            }
        
        this.count++;
        this.lowestCount = 0; 
        this.items[0] = element; 
        }


    };

    removeFront(){
        if(this.isEmpty()) return undefined;
        let result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result ;
        
        
    };

    removeBack(){
        if(this.isEmpty()) return undefined;
        let result = this.items[this.count-1];
        delete this.items[this.count-1];
        this.count--;
        return result;
        
        
    };

    peekFront(){
        return this.items[this.lowestCount];
    };
    peekBack(){
        return this.items[this.count-1];
    };
    
    clear(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    };
    toString(){
        if(this.isEmpty()) return '';
        let objString = `${this.items[this.lowestCount]}`;
        for(let i=this.lowestCount+1; i<this.count; i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    };
}


const deque = new Deque();

console.log(deque.isEmpty())


deque.addBack('L');
console.log(deque.peekBack())
deque.addBack('L');
console.log(deque.peekBack())
deque.addBack('O');
console.log(deque.peekBack())

deque.addFront('E');
console.log(deque.peekFront());
deque.addFront('H');
console.log(deque.peekFront());

console.log(deque.size());
console.log(deque.toString());

console.log(`

${deque.isEmpty()}

`)

deque.removeFront();
deque.removeFront();

console.log(deque.size());
console.log(deque.toString());

console.log(deque.peekBack());
console.log(deque.peekFront());
   	
deque.addFront('E');
deque.addFront('H');
console.log(deque.toString());

console.log(deque.removeBack());
console.log(deque.removeFront());
console.log(deque.toString());


deque.clear();
console.log(deque.isEmpty());   