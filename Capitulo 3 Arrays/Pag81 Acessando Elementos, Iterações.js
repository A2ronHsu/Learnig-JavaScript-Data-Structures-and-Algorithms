let daysOfWeek = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//Para acessar um elentro usamos colchetes da seguinte forma

console.log(daysOfWeek[0]); // o primeiro elemento do array está na posiçãi[0]
console.log(daysOfWeek[1]);
console.log(daysOfWeek[2]+'\n ');

for (let i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i]);
}


//aqui queremos os 20 primeiros numeros da seguencia de fibonacci
const fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 2;

for (let i = 2; i < 20; i++) { //quero preencher o segundo elemente até o vigesimo elemente
    
    fibonacci[i] = fibonacci[i-1]+fibonacci[i-2]; //sequencia de fibonacci
    
}

for (let i = 0; i < fibonacci.length; i++) {
    const element = fibonacci[i];
    console.log(i+' - '+element);    
}

