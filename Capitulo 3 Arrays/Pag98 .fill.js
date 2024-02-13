//.fill()
//O método fill() preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático.
//arr.fill(valor[, ínicio = 0[, fim = this.length]])

  [1, 2, 3].fill(4); // [4, 4, 4]
  [1, 2, 3].fill(4, 1); // [1, 4, 4]
  [1, 2, 3].fill(4, 1, 2); // [1, 4, 3]
  [1, 2, 3].fill(4, 1, 1); // [1, 2, 3]
  [1, 2, 3].fill(4, -3, -2); // [4, 2, 3]
  [1, 2, 3].fill(4, NaN, NaN); // [1, 2, 3]
  Array(3).fill(4); // [4, 4, 4]
  [].fill.call({ length: 3 }, 4); // {0: 4, 1: 4, 2: 4, length: 3}

let numbers = [1,2,3,4,5,6];
// o array numbers tem tamanho 6, se usarmos .fill(0) todos os elementos do array ficarão preenchidos com 0
numbers.fill(0);
console.log('numbers.fill(0) = '+numbers);

//o segundo argumento representa o indice de inicio para o preenchimento.

numbers.fill(2,1);//preenchendo aqui com numento`2` a partir do elemento de indice 1;
console.log('numbers.fill(2,1) =', numbers);

//o terceiro argumento representa o indice final para a iteraçao de preenchimento
numbers.fill(1,3,5);
console.log('numbers.fill(1,3,5) =', numbers); //preenche com `1` do indice 3 ao 4

//o metodo fill é otimo para inicializar um array com um valor especifico

let ones = Array(6).fill(1);
console.log(ones);