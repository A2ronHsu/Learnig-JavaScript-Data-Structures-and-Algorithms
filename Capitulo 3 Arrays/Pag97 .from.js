//.from
//o metrodo Array.from cria arrays a partir de um array existente.

//Array.from(arrayLike[, mapFn[, thisArg]])
// arrayLike
// Um array-like ou um objeto iterável para converter em array.

// mapFn
// Opcional. Função Map que será chamada para cada elemento do array.

// thisArg
// Opcional. Valor a ser utilizado como this quando a mapFn for chamada.

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//se quisermos compiar numbers para um variavel numbers2 inteiro podemos fazer:
let numbers2 = Array.from(numbers);
console.log('numbers2 = Array.from(numbers);\n'+numbers2);

//o segundo argumento de .from é opcional, ela é uma função que serve para mapear quais elementos queremos
//se quisermos true para pares e false para impares podemos fazer:
 let even = Array.from(numbers,x=>(x%2==0));
 console.log('Array.from(numbers,x=>(x%2==0)) \n'+even);
 //o codigo anterior criou um array chamado evens, com um valor true se o numero for par e false se for impar
 
