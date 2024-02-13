let number = [-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12];
console.log(number);
console.log(`note que o tamanho do array number é de  ${number.length}`); 
//Para remover um elemento da primeira posição podemos usar o seguinte codigo
for (let i = 0; i < number.length; i++) {
    number[i] = number[i+1];
}

console.log(`note que o tamanho do array number ainda é de  ${number.length}`); 
console.log(`mas o ultimo elemento é ${number[number.length]}`);

//o codigo anterior simplesmente move o elemente do para a esquerda, e o ultimo elemento do array, number[16], recebe um valor indefinido de number[17]
//para de fato eliminar o primeiro elemente precisamos criar um novo array de array.length - 1. Faremos isso criando um metodo removeFirstPosition e um metodo reindex.
//reindex elimina os undefined do array
//removeFirstPosition elimina o primeiro elemento

Array.prototype.reIndex = function(myArray){
    const newArray = [];
    for (let i = 0; i < (myArray.length); i++) {
        if (myArray[i] != undefined) {
           // console.log(myArray[i]);    
            newArray.push(myArray[i]);   
        }
    }
    return newArray;
}

Array.prototype.removeFistPosition = function(){
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i+1];
    }
    return this.reIndex(this);
}

number = number.removeFistPosition();
console.log(number);

//o codigo anterior é um problema classico de array
//para fazer a mesma operação p JavaScript tem o metodo shift. O método shift() remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array.
console.log(number.shift());
console.log(number);

