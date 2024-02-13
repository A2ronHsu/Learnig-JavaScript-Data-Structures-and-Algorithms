//começaremos declarando uma classe stack da seguinte maneira

class Stack {
    constructor(){ 
        this.count = 0; //a propriedade count manterá o controle do tamanho da pilha, o que será util pra adcionar e remover elementos.
        this.items ={}  //aqui declaramos nosso contrunstrutor como um objeto
    }

    //push: como estamos trabalhando com objetos, essa versão do metodo push somente permite adicionar um elemento por vez
    push(element){
        this.items[this.count] = element;
        this.count++;
    }

    //tamanho da pilha: implementado o metodo size temos
    size(){
        return this.count;
    }

    //a pilha está vazia? : implementando a isEmpty temos
    isEmpty(){
        return this.count === 0;
    }

    //pop de elementos da pilha: como a pilha não é um array, vamos precisar implementar pop manualmente. pop remove o ultimo elemento da pilha e o retorna, entao:
    pop(){
        if(this.isEmpty()) return undefined;
        this.count--;
        const deleted= this.items[this.count];
        delete this.items[this.count];// aqui usamo o operador delete para remover um objeto
        return deleted;
    }

    //com esses metodos já temos os principios do LIFO satisfeitos

    //peek : para espiar o ultimo elemento da pilha vamo precisar decrementar o count em 1
    peek(){
        if(this.isEmpty()) return undefined;
        return this.items[this.count-1]; // this.count -1  é o key do ultimo elemento 
    }

    //clear: para limpar a pilha basta reiniciar com os mesmos valores do construtor
    clear(){
        this.items={};
        this.count=0;
    }

    /*
    poderiamos fazer clear usando while, respeitando a LIFO assim:
    while(!isEmpty){
        stack.pop();
    }
    */

    toString(){
        if(this.isEmpty()) return '';
        let objString = this.items[0];
        for(let i=1; i<this.count; i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString;

    }



}


const stack = new Stack(); // criando stack com a classe baseada em objeto Stack

stack.push(8); //adicionando elementos em stack
stack.push(5); //adicionando elementos em stack

console.log(stack);

console.log(`
    stack.push(5);
    stack.push(8);
    stack.items[0]= ${stack.items[0]}  //acessanto 'items' dentro da stack
    stack.items[1]= ${stack.items[1]}  //acessanto 'items' dentro da stack
    `);

stack.pop(); //removendo o ultimo item adicionando 
console.log(`
    stack.pop();
    stack.items[0]= ${stack.items[0]}  //acessanto 'items' dentro da stack
    stack.items[1]= ${stack.items[1]}  //acessanto 'items' dentro da stack
    `)
    
stack.push('teste');  //adicionando elementos em stack


console.log(`
    stack.push('teste');
    stack.peek();
    ${stack.peek()}  //verificando o ultimo item adicionado
`)


console.log(`
    stack.clear();
    stack.isEmpty()  ==    ${stack.isEmpty()}

`)

stack.push(1);
stack.push(2);
stack.push(3);




console.log(stack)
console.log(typeof(stack))
console.log(stack.toString())
console.log(typeof(stack.toString()))
console.log('\n ' + stack.items[0],stack.items[1], stack.count) // note que podemos acessar as propriedades da classe Stack
stack.items[0] = 'isso pode ser um problema';
stack.count = 'items e count são publico, o que pode desestruturar a pilha';

console.log(stack.items[0]);
console.log(stack.count);
console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
console.log(stack.items);
//para que a pilha seja uma estrutura de dado consistente suas propriedades nao devem ser acessado.

//como convenção usamos o under score para indicar que uma propriedade é private, 