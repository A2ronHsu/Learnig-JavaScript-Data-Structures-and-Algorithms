//O loop for...of percorre objetos iterativos (en-US) (incluindo Array, Map, Set, o objeto arguments (en-US) e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto. Executa uma instrução para cada elemento da array

// Sintaxe
// for (variavel of iteravel) {
//   declaração
// }
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log('com for...of')
for (const n of numbers) {
    console.log(n%2? 'even': 'odd');
}

console.log('\n com for')

for (let i = 0; i < numbers.length; i++) {
    let n = numbers[i];
    console.log(n%2? 'even': 'odd');
    
}

