//uma versão da fila modificada é a fila circular. Um exemplo de fila circular é o jogo da batata quente.Vamos simular esse jogo com uma função que entra com uma lista e um numero de passadas de batata.
class Queue{
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

function hotPotato(elementList, num){
    const queue = new Queue;
    const elimitatedList = [];
    for(let i = 0; i < elementList.length; i++){
        queue.enqueue(elementList[i]);
    }
    while(!queue.isEmpty()){
        for(let i=0; i<num;i++){
            queue.enqueue(queue.dequeue());
        }

        elimitatedList.push(queue.dequeue());
    }
    const result = elimitatedList.pop();
    return {    
        losers : elimitatedList,
        winner : result,


    }

}

const names = ('Joao Jack Camila Ingrid Carl').split(' ');
const result = hotPotato(names,103);

result.losers.forEach( name =>
    console.log(name,' foi eliminado')
);

console.log(`
    o ganhador da batata quente é ${result.winner}
`);