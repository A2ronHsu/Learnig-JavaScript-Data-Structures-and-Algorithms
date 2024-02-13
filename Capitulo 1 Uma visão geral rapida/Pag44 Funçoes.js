// Em programação de computadores, uma função é uma sequência de instruções que realiza uma tarefa específica, agrupando essas instruções em um bloco reutilizável. Funções são fundamentais para a modularização e organização de código, permitindo que você divida um programa em partes menores, mais gerenciáveis e compreensíveis.
// A definição geral de uma função inclui:
// Nome: A função é identificada por um nome único, que é usado para chamá-la quando necessário.
// Parâmetros ou argumento: Uma função pode aceitar zero ou mais parâmetros. Esses parâmetros são valores que a função espera receber quando é chamada e podem ser usados dentro do corpo da função.
// Corpo: O corpo da função é composto por um bloco de código que contém as instruções a serem executadas quando a função é chamada.
// Valor de Retorno: Uma função pode retornar um valor ao ponto onde foi chamada. Nem todas as funções retornam um valor; algumas podem realizar uma tarefa sem produzir um resultado específico.

function sayHello(){   //função sem return
    console.log('Hello de uma função sem return')
}


sayHello(); //execuntado a função


console.log('execute a function output(), esta função escreve no console o que estiver no argumento')
function output(text){ //função com um argumento
    console.log(text);
}


console.log('execute a function sum(), ela soma dois numeros')
function sum(num1,num2){     //função com mais de um argumento e return
    return num1+num2;
}


