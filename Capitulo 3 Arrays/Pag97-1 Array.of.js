//o metodo Array.of() cria outro array a partir dos argumentos a ele passado.
let numbers1 = Array.of(7);
let numbers2 = Array.of(0,1,2,3,4,5,6,7);
console.log(numbers1);
console.log(numbers2);
console.log('usando for...of');
for (const n of numbers1) {
    console.log(n);
}
for (const n of numbers2) {
    console.log(n);
}

console.log('usando for')
for (let i = 0; i < numbers2.length; i++) {
    const element = numbers2[i];
    console.log(element);
    
}

//aqui podemos usar o operador de espalhamento (spread) para passar os argumentos ao .of()

let sprdNumbers = Array.of(...numbers2);
console.log(sprdNumbers);
