// veremos os metodos .toString e .join
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log(`o metodo .toString convertes um array para uma string: \n ${numbers.toString}`);

//se quiser uma string dos elementos de uma array com um separador p .join faz justamente isso

console.log(`o metodo .join devolve o array numa string com separadores\n ${numbers.join('-')}`);

console.log(numbers.join('/'));

