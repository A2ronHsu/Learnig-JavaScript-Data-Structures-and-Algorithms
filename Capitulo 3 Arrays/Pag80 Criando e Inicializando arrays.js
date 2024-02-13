//Podemos iniciar um array da seguinte forma:

let daysOfWeek = new Array(); // aqui criamos um array vazio;
console.log(daysOfWeek);
daysOfWeek = new Array(7); //aqui atribuimos a dayOfWeek um array de tamanho 7
console.log(daysOfWeek);
daysOfWeek = new Array('Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'); //aqui atribuimos os elementos do array diretamente para seu construtor;
console.log(daysOfWeek);

//A melhor forma de criar um array em JavaScript é usando []

daysOfWeek= []; //como já criamos o array dayOfWeek anteriormente estou atribuindo a ele agora um array vazio

//se quisermos saber o tamanho do array podemos usar a propriedade length

console.log(daysOfWeek.length+' pois aqui esta um array vazio'); 
daysOfWeek = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(daysOfWeek.length+' pois aqui esta um array com 7 dias da semana'); 


