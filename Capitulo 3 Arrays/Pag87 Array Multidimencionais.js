//vamos criar um array de array
let ij = [];
ij[0] = ['00','01','02','03','04','05','06'];
ij[1] = ['10','11','12','13','14','15','16'];

// console.log(ij[0]);
// console.log(ij[1]);
console.table(ij);

//o mesmo codigo poderia ser escrito tambem da seguinte forma

ij[0][0]='a';
ij[0][1]='b';
ij[0][2]='c';
ij[0][3]='d';
//...
ij[1][0]='e';
ij[1][1]='f';
ij[1][2]='g';
ij[1][3]='h';
//
console.table(' \n ' );
// console.log(ij[0]);
// console.log(ij[1]);
// console.log(ij[0].length);
// console.log(ij[1].length);
// console.log(ij.length);
console.table(ij);

// podemos iterar pelos elementos de um array de array (matriz bidimencional) da seguinte forma
console.log('\n ')

for (let i = 0; i < ij.length; i++) {
    for (let j = 0; j < ij[i].length; j++) {
        ij[i][j]=i+j;        
    }
    
}

 console.table(ij);
console.log('');

 //podemos fazer array multidimencionais

 const matrix3x3x3 = [];
 for (let i = 0; i < 3; i++) {
    matrix3x3x3[i]=[];
    for (let j = 0; j < 3; j++) {
        matrix3x3x3[i][j]=[];
        for (let z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z]=`${i}${j}${z}`;
            console.log(matrix3x3x3[i][j][z]);
        }
        
    }  
 }

 //Os arrays no JavaScript são  objetos modificado, o que significa que todo array terá metodos disponiveis para uso.
 //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
 