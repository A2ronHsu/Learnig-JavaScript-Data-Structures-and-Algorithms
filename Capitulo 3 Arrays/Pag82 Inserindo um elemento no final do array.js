let number = [0,1,2,3,4,5,6,7,8,9];

//para acrescentar  um novo elemento nesse array de 10 elementos podemos:
number[10]=10;
console.log(number+'\n ');

//no JavaScript um array é um objeto mutavel e crescerá a medida do necessario. Outras linguagens como C e Java é preciso determinar o tamanho do array na sua definição.

//suponhamos que nao sabemos o tamanho do array, portanto não sabemos valor do ultimo indice, mas queremos acrescentar elementos no final do array, então podemos usar o metodo push

number.push(11);
number.push(12,13);
console.log(`após usar o metoro push temo o seguinte array \n [${number}]\n `);

