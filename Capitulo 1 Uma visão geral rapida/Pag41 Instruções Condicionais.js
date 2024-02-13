//if
//podemos usar um if quando queremos executar uma intrusão somente quando é true:\
var num = 1;
if (num === 1){                     //sintaxe if (condicional) { executa oque está em chaves se verdadeiro}
    console.log('num is equal to 1');
}
//usamos uma if..else para executar um bloco de codigo se verdadeiro e outro se falso

num = 5;
if (num ===1){
    console.log('num is equal to 1');
}else{
    console.log('num us not equal to 1, the value of num is '+ num);
}

// a expressão if...else tb pode ser representada por um operado ternario:
(num === 1) ? console.log('num === 1'):console.log('num != 1, num === '+num);

//switch
//se a condição que estivermos comparando for a mesma que a anterior mas com valores diferentes podemos usar o switch
//case e break são palavra reservadas do switch
//default é a intrução de caso nenhum case for executado
var month =5;
switch(month){
    case 1:    //se o valor de swicth for igual ao valor de case então se executa as instruções do case
        console.log('January');
        break; //pára a execução do switch
    case 2:
        console.log('February');
        break;
    case 5:
        console.log('May');
        break;
    default: //caso nenhum case for executado, se executa o default
        console.log('month is not May');
}
