let number = [0,1,2,3,4,5,6,7,8,9];

//podemos usar um Array prototype para fazer um metodo Array para inserir um elemento na primeira posição
Array.prototype.insertFirstPosition = function(value){
    for (let i = this.length; i >= 0; i--) {

        this[i]=this[i-1];        
    }
    this[0]=value;

}

number.insertFirstPosition(-1);
console.log(number);

//a classe array no JavaScript já possui um metodo para o codigo anterior, é o metodo unshift
number.unshift(-2);
number.unshift(-3,-4);

console.log(number);

