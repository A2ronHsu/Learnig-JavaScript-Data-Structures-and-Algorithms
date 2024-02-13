//@@iterador
//@@iterador O valor inicial da propriedade @@iterator é o mesmo objeto função que o valor inicial da propriedade values(). O método values() retorna um novo objeto de Array Iterator que contém os valores para cada índice no array. 
// Symbol.iterator é um símbolo especial em JavaScript que é usado para associar um método ao objeto, indicando como ele deve se comportar quando iterado. Este símbolo é parte do protocolo de iteração, introduzido no ECMAScript 6 (ES6), e é amplamente utilizado para tornar objetos iteráveis.
// O protocolo de iteração é uma forma de padronizar como objetos devem ser iterados em JavaScript, permitindo que sejam utilizados em estruturas de controle de fluxo que suportam iteração, como o for...of, Array.from(), e o spread operator (...).
// A ideia básica é que um objeto iterável deve ter um método associado a Symbol.iterator, que, quando chamado, retorna um objeto iterator. Este iterator deve ter um método chamado next() que fornece os valores subsequentes da iteração.
//Symbol.iterator torna um objeto interavel, o que significa que pode ser utilizado em construções que suportam iteração, como o loop for...of, a função Array.from(), o spread operator (...), entre outros.

const meuObjeto = {
    dados: [1, 2, 3],
    [Symbol.iterator]: function() {
      let indice = 0;
      return {
        next: () => {
          return indice < this.dados.length ?
            { value: this.dados[indice++], done: false } :
            { done: true };
        }
      };
    }
  };
  
  // Iterando sobre o objeto usando for...of
  for (const item of meuObjeto) {
    console.log(item); // Saída: 1, 2, 3
  }



//copyWithin
//copyWithin(target, start, end) : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin#descri%C3%A7%C3%A3o

console.log([1, 2, 3, 4, 5].copyWithin(-2));
// [1, 2, 3, 1, 2]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]


//includes
//O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false


//find
//O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.

const array2 = [5, 12, 8, 130, 44];

const found = array2.find((element) => element > 10);

console.log(found);
// Expected output: 12

//findIndex
//O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

//abaixo uma função que testa se um numero é primo
function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  
  console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, não encontrado
  console.log([4, 6, 7, 12].findIndex(isPrime)); // 2

  
  //.fill()
  //O método fill() preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático.

[1, 2, 3].fill(4); // [4, 4, 4]
[1, 2, 3].fill(4, 1); // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2); // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1); // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2); // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN); // [1, 2, 3]
Array(3).fill(4); // [4, 4, 4]
[].fill.call({ length: 3 }, 4); // {0: 4, 1: 4, 2: 4, length: 3}


//.from
//cria um novo array a partit de um array existente


//.keys
//O método keys() retorna um novo Array Iterator que contém as chaves para cada index do array.
// Sintaxe
// arr.keys()

var arr = ["a", "b", "c"];
var iterator = arr.keys();

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }


//.of
//O método Array.of() cria um nova instância de Array com um número variável de argumentos, independentemente do número ou do tipo dos argumentos. A diferença entre o Array.of() e o construtor de Array é no tratamento dos argumentos inteiros: Array.of(7) cria um array com um único elemento, 7, enquanto Array(7) cria um array vazio de propriedade length igual a 7 (Nota: isso quer dizer um array com 7 espaços vazios, e não com valores do tipo undefined).

Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // array com 7 espaços vazios
Array(1, 2, 3);    // [1, 2, 3]

//.values
//O método values() retorna um novo objeto de Array Iterator que contém os valores para cada índice no array.

var arr = ["w", "y", "k", "o", "p"];
var eArr = arr.values();
console.log(eArr.next().value); // w
console.log(eArr.next().value); // y
console.log(eArr.next().value); // k
console.log(eArr.next().value); // o
console.log(eArr.next().value); // p