
var num = 0;
console.log('num = 0 '+num);

num = num + 2;
console.log('num = num + 2 '+ num);

num = num*3;
console.log('num = num*3 '+ num);

num = num/2;
console.log('num = num/2 ' + num);
 
num++;
console.log('num++  '+ num);

num--;
console.log('num-- ' + num);

num +=1;
console.log('num +=1 ' + num);

num -=2;
console.log('num -=2 ' + num);

num *=3;
console.log('num *=3 ' +num);

num /=2;
console.log('num /=2 ' + num);

num /=3;
console.log('num /=3 ' + num);

console.log('num == 1: '+(num == 1));
console.log('num === 1 :' + (num===1) );
console.log('num !=: 1 '+ (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 :' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1) );
console.log('true && false : ' + (true && false));
console.log('true || false : ' + (true ||  false));
console.log('!true : '+ (!true));


// operadores bit a bit
console.log(' ');
console.log('5 & 1 : ' + 5 & 1 );
console.log('5 | 1 : ' + 5 | 1);
console.log('~5 : ' + (~5));
console.log('5 << 1: ', (5 << 1));
console.log('5 >> 1: ', (5 >> 1));
console.log('5 ^ 1 ', (5 ^ 1));
console.log('');

//operador typeof
console.log('operador typeof');
console.log('tipeof num: ',typeof num);
console.log('typeof Packt: ', typeof 'Packt');
console.log('typeof true: ', typeof true);
console.log('typeof [1,2,3]: ', typeof [1,2,3]);
console.log('typeof {name:Jonh}', typeof {name:'Jonh'});
