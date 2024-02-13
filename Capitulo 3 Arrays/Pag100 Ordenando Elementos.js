

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

//vamos usar o .reverse para dispor numbers do ultimo ao primeiro
numbers.reverse();
console.log(`usando numbers.reverse() temos: \n ${numbers}\n`);

//vamos usar o metodo .sort para ordenar os elementos de numbers
numbers.sort();
console.log(`fazendo numbers.sort() temos: \n ${numbers}\n`);
//sort ordenou os elementos de numbers em ordem lexicografica, tratando os elementos de numbers como se fossem strings. O metodo .sort() pode receber uma função callback como argumento: uma função de comparação (compareFuncrtion)
numbers.sort((a,b)=> a - b);
console.log(`fazendo numbers.sort((a,b)=> a - b) temos: \n ${numbers}\n`); 
//(a,b)=> a - b retorna um numero negativo, positivo ou 0. Se a-b for negativo que dizer que a é menor que b, então a é ordenado para um indice menor; se a-b é positivo a é ordenado para um indice maior; se a-b é 0 , não há ordenação. Portando a-b ordena de forma crescente.
numbers.sort((a,b)=> b-a);
console.log(`fazendo numbers.sort((a,b)=> b - a) temos: \n ${numbers}\n`); //aqui ordenamos em ordem descrescente

//(a,b)=> a - b pode ser escrito como uma função da seguinte forma

function compare(a, b) {
    if (a<b) {
      return -1;
    }
    if (a>b) {
      return 1;
    }
    //a = b
    return 0;
  }

console.log(numbers.sort(compare));


//Ordenação personalizada
//podemos ordenar um array que contenha qualquer tipo de objeto, e usar uma compareFunction para comparar os elementos de acordo com o que for necessario. Vamos ordenar um array de objetos com as propriedades name e value em ordem crescente de value.
const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 11 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 0 },
  { name: "Zeros", value: 37 },
];

//vamos definir uma compareFunction da seguinte forma

items.sort(function(a,b){
  if(a.value < b.value) return -1;
  if(a.value > b.value) return 1;
  if((a.value == undefined) || (b.value == undefined))return 0;
  return 0;

})

console.log(items);

//Ordenando String
//O metodo sort ordena de acordo com o valor ASCII do caracter
let names = ['Ana', 'Jonh', 'jonh', 'ana'];
console.log(`letras maiusculas e minusculas possuem valores ASCII distintos portanto names terá \n ${names.sort()}`)

//se quisermos os nomes em ordem alfabetica teremos que ignorar maiusculas e minusculas com uma compareFunction

function alfaSort(a,b){
  if(a.toLowerCase() < b.toLowerCase) return -1;
  if(a.toLowerCase() > b.toLowerCase) return 1;
  return 0;
}


console.log(`usando o metodo toLowerCase na compareFunction temos \n${names.sort(alfaSort)}`);

//outra forma ignorar variações no case e nos ascentos é usando o metodo localeCompare

console.log(names.sort((a,b)=> a.localeCompare(b))); //usando localeCompare as minusculas vem primeiro