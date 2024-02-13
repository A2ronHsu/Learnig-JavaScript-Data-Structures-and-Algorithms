//temos dois metodos de pesquisa antes do ES6, o .indexOf, que retorna o indice do primeiro elemento correspondete ao argumento passado, e o . lastIndexOf. que devolve o ultimo indice do elemento correspondente ao argumento passado.

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log(numbers);
console.log(`${numbers.indexOf(10)} pois 10 está na posição 9`);
console.log(`${numbers.indexOf(100)} pois 100 não existe em numbers\n`);

//observe agora o seguinte caso
numbers.push(10);
console.log(numbers);
console.log(`${numbers.indexOf(10)} pois 10 está na posição 9`);
console.log(`${numbers.lastIndexOf(10)} pois 10 está na posição 15 tambem, percorrendo em ordem descrescente`);
console.log(`${numbers.lastIndexOf(100)} pois 100 não existe em numbers\n`);

// no ES6 temos o metodo find e findIndex
//queremos saber se em numbers tem algum multiplo de 13 usando uma função
numbers.push(26,39);
function multipleOf13(element, index, array){
    return (element%13 == 0 );
}

console.log(numbers);
console.log(`numbers.find(multipleOf13) = ${numbers.find(multipleOf13)}`);
console.log(`numbers.findIndex(multipleOf13) = ${numbers.findIndex(multipleOf13)}\n`);

// find e findIndex recebem como argumento uma função callback booleana que teste cada elemente até encontrar a primeira ocorrencia verdadeira. find retorna o valor da ocorrencia, e findIndex  retorna o indice da ocorrencia

//no ECMAScript temos o metodo includes, que retorna true caso encontre um elemento no array e false caso contrário.
console.log(`includes(26)? ${numbers.includes(26)} pois 26 existe em numbers`);
console.log(`includes(20)? ${numbers.includes(20)} pois 20 nao existe em numbers`);

// podemos definir tambem um indice de inicio para a busca
console.log(`includes(13,15)? ${numbers.includes(13,15)} pois 13 nao existe apos o indice 15`);
console.log(`includes(13,5)? ${numbers.includes(13,5)} pois 13 existe apos o indice 5`);


