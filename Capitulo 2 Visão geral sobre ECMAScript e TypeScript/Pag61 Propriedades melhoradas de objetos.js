//no ES6 é possivel declarar varias variaveis de uma só vez, isso se chama desestruturação de array

let [x,y]=['a','b'];

//esse codigo é o mesmo que o seguinte:

// let x = 'a';
// let y = 'b';

console.log(x,y);

//a desestruturação de array tambem pode fazer swap em usar uma terceira variavel temp

[x,y]=[y,x];

//o codigo anterior é o mesmo que

/*
 var temp = x;
 x=y;
 y=temp;
*/
 
//

//outra funcionalidade é a abreviação de propriedades (property shorthand), que diminue o codigo para fazer objetos
[x,y]=['a','b'];
let obj = {x,y};
console.log(obj);

/* o codigo anterior é o mesmo que
var x = 'a';
var y = 'b';
obj = {x:x , y:y};\
console.log(obj);
*/


//mais uma funcionalidade é o nome de metodos abreviados (shorthand method names). Permite declarar funções dentro de objetos.
const hello = {
    name: 'abcdef',
    printHello(){
        console.log('Hello');
    }
};

console.log(hello.printHello());

/*O codigo anterior tb pode ser escrito assim
const hello = {
    name: 'abcdef',
    printHello : printHello(){
        console.log('Hello');
    }
};

console.log(hello.printHello());

*/
