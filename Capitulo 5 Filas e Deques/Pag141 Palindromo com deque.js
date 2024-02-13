//um palindromo é uma é uma sequencia simetrica de caracteres, como madam e racecar. Vamos usar um deque para testar se uma sequencia de caracteres de uma string é um palindromo
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

function palidromeChecker(aString){
    // if((aString === undefined || aString === null)|| //aqui queremos validar se aString é uma string
    // (aString !== null && aString.length === 0))
    // return false;
    if (typeof(aString) !== 'string') return false; //aqui uso typeof() pra verificar se aString é uma String

    const deque = new Deque();
    const lowerString = aString.toLowerCase().split(' ').join('');
    let isEqual=true;
    let firstChar , lastChar;
    for(let i=0;i<lowerString.length;i++){
        deque.addBack(lowerString.charAt(i));
        //deque.addBack(lowerString[i]);
        
        
    }
    
    while (deque.size()>1 && isEqual){
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();
        if( firstChar !== lastChar) isEqual = false;
        
        }
return isEqual;
}

console.log('a',palidromeChecker('a'));
console.log('aa',palidromeChecker('aa'));
console.log('kayak',palidromeChecker('kayaka'));
console.log('level',palidromeChecker('level'));
console.log('was it a car or a cat I saw',palidromeChecker('was it a car or a cat I saw'));
console.log('Step on nno Pets',palidromeChecker('Step on nno Pets'));