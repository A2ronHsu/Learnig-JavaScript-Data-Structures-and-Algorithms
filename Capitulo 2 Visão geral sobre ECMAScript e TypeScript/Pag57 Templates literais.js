//uma templane literal ou template string é um recurso no javaScript para criar strings sem a necessidade de concatenar constantemente

const book = {
    name: 'Learning JavaScript DataStructures and Algorithms'
};

// aqui um exemplo concatenando com o operador +
console.log('You are reading ' + book.name+ ' \n and this is a new line \n and so is this\n\n'); 

//podemos melhorar esse codigo assim:

console.log(`You are reading ${book.name}.,
    and this is a new line
        and so is this.`);
 
//templates literais devem estar entre crases (``). Para referenciar uma variavel basta usar a sintaxe ${}
