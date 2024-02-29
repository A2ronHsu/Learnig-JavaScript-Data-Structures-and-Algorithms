//para que uma recursão funcione temos que ter um caso base e um ponto de parada

//para entender a recursão é preciso entender antes a recursão
//exemplo basico
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function understandRecursion(answer = false){
    rl.question('do you understand recursion, yes? ', (answer)=> {
        if( answer == 'yes') rl.close() //aqui o caso base ou ponto de parada
        else{
            console.log('então vamos chamar a função understandRecursion');
            understandRecursion(answer) //aqui a chamada recursiva
        } 
    });
}

understandRecursion();