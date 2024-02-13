let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

//O método entries() retorna um novo objeto Array Iterator que contém os pares chave/valor para cada índice no array.

var arr = ["a", "b", "c"];
var eArr1 = arr.entries();

console.log('\n exemplo com ["a","b","c"]');
console.log(eArr1.next().value); // [0, 'a']
console.log(eArr1.next().value); // [1, 'b']
console.log(eArr1.next().value); // [2, 'c']

console.log('\n usando for...of')
var eArr2 = arr.entries();
for (let e of eArr2) {
    console.log(e);
  }
  // [0, 'a']
  // [1, 'b']
  // [2, 'c']

  //mais um exemplo com a variavel numbers

console.log('\n exemplo com variavel numbers usando 3x console.log(aEntries.next().value);');
let aEntries = numbers.entries(); //obtem um iterador de chave/ valor
console.log(aEntries.next().value);
console.log(aEntries.next().value);
console.log(aEntries.next().value);

console.log('\n usando for of')
for (let e of aEntries){
    console.log(e);
}


//O método keys() retorna um novo Array Iterator que contém as chaves para cada index do array.
var arr3 = ["a", "b", "c"];
var iterator = arr3.keys();
console.log('metorodo .key()');
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
console.log(iterator.next()); // { value: undefined, done: true }
//quando nao haver mais indices para iterar a iterator.next() devolve value: undefined e done: true
//usando um for...of teriamos:
var iterator = arr3.keys();
console.log('usando for...of');
for(let elem of iterator){
    console.log(elem);
}

//.value()
//O método values() retorna um novo objeto de Array Iterator que contém os valores para cada índice no array.
var arr = ["w", "y", "k", "o", "p"];
var eArr = arr.values();

console.log('3x console.log(eArr.next().value)');
console.log(eArr.next());
console.log(eArr.next());
console.log(eArr.next());

// console.log('eArr com loop for...of')
// var eArr = arr.values();
for (let letter of eArr) {
  console.log(letter);
}

