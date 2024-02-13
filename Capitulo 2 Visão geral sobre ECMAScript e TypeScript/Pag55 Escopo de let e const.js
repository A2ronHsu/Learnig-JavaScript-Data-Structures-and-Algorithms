//ECMAScript é uma padronização do JavaScript. A vesão mais recente do ES permite usar let e const para declarar variaveis

let movie = 'Lord of the Rings';
//var movie = 'Batman vs SuperMan'; //erro, movie j'a foi declarado
function starWarsFan(){ 
    const movie = 'Star Wars';
    return movie;
}

function marvelFan(){
    movie = 'The Avenger';
    return movie;
}

function blizzardFan(){
    const isFan = true;
    let phrase = 'Warcraft';
    console.log('Before if: '+phrase);
    if(isFan){
        let phrase = 'initial text';
        phrase = 'For the Horde!';
        console.log('Inside if: '+phrase);
    }
    phrase = 'For the Alliance!';
    console.log('After if: '+phrase);
}

console.log('movie = ' + movie);
console.log('starWarsFan = ' + starWarsFan());
console.log('marvelFan = ' + marvelFan());
console.log('movie = ' + movie);
blizzardFan();