//vamos fazer uma função que converte decimal para binario usando uma Stack

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

function decimalToBinary(decNumber){

    if (decNumber == 0) return '0';

    const remStack = new Stack();
    let num =decNumber; //num recebe o decimal 
    let rem; //rem é o resto da divisão, o algarismo binario
    let binaryString =''; //binaryString amazena o string de numero binario resultante
    while(num>0){ //aqui iteramos a conversão binaria
        rem = Math.floor(num%2); //Math.floor arredonda para baixo o resto da divisão por 2 ( num % 2)
        remStack.push(rem); //usamos push para armazenar o algarismo binario em remStack
        num = Math.floor(num / 2); //Math.floor para arrendondar para baixo a divisão por 2, amazenamos em num o proximo numero a ser dividido
    }

    while(!remStack.isEmpty()){ //aqui iteramos para transformar o remStack em string
        binaryString += remStack.pop().toString(); //
    }

    return binaryString;
}


console.log(decimalToBinary(0));
console.log(decimalToBinary(1));
console.log(decimalToBinary(3));
console.log(decimalToBinary(7));
console.log(decimalToBinary(15));
console.log(decimalToBinary(127));


function baseConverter(decNumber,base){

    if (decNumber == 0) return '0';

    const remStack = new Stack();
    let num =decNumber; //num recebe o decimal 
    let rem; //rem é o resto da divisão, o algarismo binario
    let binaryString =''; //binaryString amazena o string de numero binario resultante
    while(num>0){ //aqui iteramos a conversão binaria
        rem = Math.floor(num%base); //Math.floor arredonda para baixo o resto da divisão por 2 ( num % 2)
        remStack.push(rem); //usamos push para armazenar o algarismo binario em remStack
        num = Math.floor(num / base); //Math.floor para arrendondar para baixo a divisão por 2, amazenamos em num o proximo numero a ser dividido
    }

    while(!remStack.isEmpty()){ //aqui iteramos para transformar o remStack em string
        binaryString += remStack.pop().toString(); //
    }

    return binaryString;
}

console.log(' ');
console.log(baseConverter(0,24));
console.log(baseConverter(1,24));
console.log(baseConverter(3,24));
console.log(baseConverter(7,24));
console.log(baseConverter(15,24));
console.log(baseConverter(127,24));