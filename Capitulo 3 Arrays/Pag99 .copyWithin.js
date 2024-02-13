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

let array = [1,2,3,4,5,6];

array.copyWithin(0,3);//copia o array a partir da posição 3 até o final e cola a partir da indice 0;
console.log(array);

array = [1,2,3,4,5,6];
array.copyWithin(1,3,5);//copia o array a partir da posição 3 a posição anterior ao 5 e cola a partir da posição 1;
console.log(array);

array = [1,2,3,4,5,6];
array.copyWithin(1,3,6);//copia o array a partir da posição 3 a posição anterior ao 6 e cola a partir da posição 1;
console.log(array);