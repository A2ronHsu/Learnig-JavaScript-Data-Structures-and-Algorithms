//Juntando varios arrays
//use o metodo concat

const zero = 0;
const postiveNumber = [1,2,3];
const negativeNumber = [-1,-2,-3];

let numbers = negativeNumber.concat(zero,postiveNumber,4,5,6,7,8,9,0);
console.log(`fazendo 'numbers = negativeNumber.concat(zero,postiveNumber,4,5,6,7,8,9,0);' temos ${numbers} no array \n `);

//Funções de Iteraçao
numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//Considere uma função que retorne um boleano para se um numero é par
// function isEven(x){
//     console.log(x);
//     return x%2 === 0 ? true : false;
// }
//podemos reescrever a função acima da seguinte forma

const isEven = x => x%2 ===0;

console.log(`isEven(numbers[0]: ${isEven(numbers[0])}`);
console.log(`isEven(numbers[1]: ${isEven(numbers[1])}`);

//vamos usar o metodo every q itera pelos elementos do array até que função devolva false

console.log(`para a variavel numbers, o metodo .every(isEven) retornará ${numbers.every(isEven)} na primeira iteração pois numbem[0] é 1 que nao é multiplo de 2`);

//agora vamos usar o metodo some que itera pelos elementos do array até que encontre true

console.log(`para a variavel numbers, o metodo .some(isEven) retornará ${numbers.some(isEven)} na segunda iteração pois numbem[1] é 2 que é multiplo de 2`);

//agora vamos usar o metodo forEach que itera por todo o array. O resultado é o mesmo que usar uma laço for com o codigo da função dentro dele
//O método forEach() executa a função dada como argumento  em cada elemento de um array.

console.log('metodo .forEach');
numbers.forEach( x => console.log(x%2 ===0 ));

//agora vamos ver o metodo map, ele retorna uma Array com o retorno da função dada como argumento.
//O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
console.log('metodo .map');
console.log(numbers.map(isEven));

//agora veja o metodo .filter: filter() chama a função callback fornecida, uma vez para cada elemento do array, e constrói um novo array com todos os valores para os quais o callback retornou o valor true ou um valor que seja convertido para true. O callback é chamado apenas para índices do array que possuem valores atribuídos; Ele não é invocado para índices que foram excluídos ou para aqueles que não tiveram valor atribuído. Elementos do array que não passaram no teste do callback são simplesmente ignorados, e não são incluídos no novo array.
//o .filter devolve um novo array com elementos para os quais a função devolveu true
console.log('metodo .filter()');
console.log(numbers.filter(isEven));

//veja agora o metodo reduce: O método reduce() executa a função de callback uma vez para cada elemento presente no array, excluindo furos (valores indefinidos), recebendo quatro argumentos:
// acumulador - valor inicial (ou o valor do callback anterior),
// valorAtual - o valor do elemento atual
// index - o índice atual e
// array - o array onde a iteração está ocorrendo.
// A primeira vez que o callback é chamado, o acumulador e o valorAtual podem ter um de dois valores possíveis. Se o valorInicial tiver sido fornecido na chamada à função reduce(), então o acumulador será igual ao valorInicial e o valorAtual será igual ao primeiro valor no array. Caso nenhum valorInicial seja fornecido, acumulador será igual ao primeiro valor no array, e valorAtual será igual ao segundo.

//Isso pode ser util se quisermos somar todos os valores de um array

console.log(numbers.reduce((acumulador, valorAtual) => acumulador + valorAtual));