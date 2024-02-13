//Nesse capitulo vamos estudar uma estrutura de dados chamado pilhas. Uma pilha é uma estrutra de dados que obedece ao princípio LIFO (Last In First Out), ou seja, o ultimo a entrar é o primeiro a sair, como uma pilha de libros ou uma pilha de bandejas.

class Stack{ //vamos criar uma classe para representar nossa pilha
    constructor(){
        this.items = []; //aqui definimos nossa classe como um array
    }

    //push de elementos na pilha: responsavel em adicionar elementos somento no final da pilha
    push(...element){ // usando um spread operator podemos adicionar varios elementos de uma só vez
        this.items.push(...element);
    }

    //pop de elementos na pilha: responsavel por remover elementos da pilha e devolver o elemente removido, o elemento removido sempre vai ser o ultimo elemente adicionado na pilha, ou seja, somente elementos no final da pilha podem ser removidos
    pop(){
        return this.items.pop();
    }

    //com os metodos push e pop temos o principio LIFO (Lastr In First Out) satisfeito.
    //vamos implementar agora alguns metodos auxiliares em nossa classe.

    //para saber qual o ultimo elemento da pilha vamos criar um metodo usualmente chamado de peek ( ou as vezes chamada topo)
    peek(){
        return this.items[this.items.length-1];
    }
    
    //verificando se a pilha está vazia: o proximo metodo que criaremos se chamará isEmpty, que devolve true se a pilha estiver vazia, e false caso contrario
    isEmpty(){
        return this.items.length === 0;
    }
    
    //verificando o tamanho da pilha: ppara coleções geralmente se usa o termo size para definir o tamanho.
    size(){
        return this.items.length;
    }

    //limpando elementos da pilha: implementando o metodo clear para esvaziar uma pilha
    clear(){
        return this.items=[];
    }
    //outra forma de implemetar clear seria usar o pop até esvaziar a pilha
}

//nossa pilha está pronta, vamos usa-la agora

const stack = new Stack(); //criamos uma pilha da classe Stack e atribuimos ela a stack
console.log(`it isEmpty? = ${stack.isEmpty()}`); // testando se stack está vazia

stack.push(5);
stack.push(8);
console.log(`stack.push(5) ; stack.push(8); stack.peek() = ${stack.peek()}`);

stack.push(9,11);
console.log(`stack.push(9,11); stack.peek() = ${stack.peek()}`);



console.log(`stack.size() = ${stack.size()}`);
console.log(`stack.isEmpty() ?  ${stack.isEmpty()}`);

stack.push(15);
console.log(`peek = ${stack.peek()}`);

stack.pop();
stack.pop();
console.log(`peek = ${stack.peek()}`);

stack.clear();
console.log(`size = ${stack.size()}`);

//testamos os metodos do nosso stack baseada em array




