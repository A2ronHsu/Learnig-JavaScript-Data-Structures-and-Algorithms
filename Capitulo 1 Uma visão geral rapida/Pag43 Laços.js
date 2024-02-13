//Laço é uma estrutura que permite a repetição de um bloco de código. É muito usado em conjunto com arrays.
//o laço for é um laço de contagem: é consittuido de um contador de laço que ,em geral, recebe um valor numerico; em seguida a variavel é compadara com outro valor (executa o laço enquanto a condição for verdadeira) e por fim o valor numerico é incrementado ou decrementado
console.log('for')
for (var i = 0; i<10; i++){
    console.log(i);
}




//o laço while é um laço condicional: o laço continua a repetição enquanto uma condição específica for verdadeira. 

console.log('while');
var i = 0;
while(i<10){
    console.log(i);
    i++;
}

//outro laço condicional é o do...while: ela executa a intrução do bloco 'do' e depois verifica a condição do while, garantindo que o bloco do laço seja executado pelo menos 1 vez
console.log('do..while');
var i = 0;
do{
    console.log(i);
    i++;
}while(i<10);