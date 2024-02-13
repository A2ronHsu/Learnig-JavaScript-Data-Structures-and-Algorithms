//podemos transformar array em parametros usando um operador de espalhamento (spread operator), disponvel no ES6
//operador de espalhamento é `...`
let params = [3, 4, 5];

function sum(x=1,y=2,z=3){
    return x+y+z;
}

//Operador de Espalhamento (spread):
//O operador de espalhamento (...) é usado para "espalhar" os elementos de uma array ou os pares chave-valor de um objeto. Ele pode ser usado em diversas situações, como criar cópias de arrays/objetos, mesclar arrays/objetos, passar argumentos de forma mais flexível, entre outros.

console.log(sum(...params));



//Operador Rest (rest):
//O operador rest (...) é usado para representar um número indefinido de argumentos como uma array em funções ou para coletar o restante dos elementos em uma desestruturação de arrays.

function restParameterFunction(x,y,...a){
    console.log(`a.length is ${a.length}`) 
    return (x+y)*a.length;
    
}

console.log(`a soma é de restParameterFunction(1,2,'string',true,999) ${restParameterFunction(1,2,'string',true,999)} pois é 1+2*tamanho-do-array-restante`);