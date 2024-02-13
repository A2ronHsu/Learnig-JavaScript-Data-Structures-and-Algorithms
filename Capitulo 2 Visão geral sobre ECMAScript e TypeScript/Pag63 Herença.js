// Herança: é um dos principios da Poo, permite que uma classe (um modelo de objeto) herde propriedades e métodos de outra classe. Isso promove a reutilização de código e a criação de hierarquias de classes. Vamos observar o seguinte codigo:


class Book{ //declaramos aqui a classe Book
    constructor(title, pages, isbn){
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIsbn=()=>{
        console.log(this.isbn);
    }
}


class ITBook extends Book{ //aqui usamos 'extends' para extender a classe Book numa classe ITBook
    constructor (title, pages, isbn, technology){
        super(title, pages, isbn); //aqui referenciamos a função construtor de Book (superclasse) com o 'super'. 
        this.technology = technology; //aqui um novo atributo é construido
    }
    printTechnology(){
        console.log(this.technology); //aqui um novo metodo é declarado
    }
}


let jsBook = new ITBook('Learning Js Algorithms', '200', '1234567890', 'JavaScript');

console.log(`jsBook: ${jsBook}`);
console.log(`jsBook.title: ${jsBook.title}`);
console.log(`jsBook.pages: ${jsBook.pages}`);
console.log(`jsBook.isbn: ${jsBook.isbn}`);
console.log(`jsBook.technology: ${jsBook.technology}`);
console.log(`jsBook.printTechnology: ${jsBook.printTechnology}`);
jsBook.printIsbn();
jsBook.printTechnology();



