// Symbol.iterator é um símbolo especial em JavaScript que é usado para associar um método ao objeto, indicando como ele deve se comportar quando iterado. Este símbolo é parte do protocolo de iteração, introduzido no ECMAScript 6 (ES6), e é amplamente utilizado para tornar objetos iteráveis.
// O protocolo de iteração é uma forma de padronizar como objetos devem ser iterados em JavaScript, permitindo que sejam utilizados em estruturas de controle de fluxo que suportam iteração, como o for...of, Array.from(), e o spread operator (...).
// A ideia básica é que um objeto iterável deve ter um método associado a Symbol.iterator, que, quando chamado, retorna um objeto iterator. Este iterator deve ter um método chamado next() que fornece os valores subsequentes da iteração.
//Symbol.iterator torna um objeto iteravel, o que significa que pode ser utilizado em construções que suportam iteração, como o loop for...of, a função Array.from(), o spread operator (...), entre outros.

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let iterator = numbers[Symbol.iterator]();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

for (let i = 7; i < numbers.length; i++)
console.log(`${i} - ${iterator.next().value/numbers[i]}`);

let iterator2 = numbers[Symbol.iterator]();
console.log(iterator2[0]); //undefined

//para iterar por um objeto iteravel deve se usar o for...of, uma vez que o objeto não possue indices para acesso
for (const n of iterator2) {
    console.log(n);
}

