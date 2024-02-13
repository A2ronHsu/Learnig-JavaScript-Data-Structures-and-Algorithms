//Vimos que podemos declarar uma classe atravez de uma function na Pag45 POO em JavaScript linha 37
//com a ES6 (ES2015) podemos declarar uma classe da seguinte forma:
class Book{
    constructor(title, pages, isbn){
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIsbn=()=>{
        console.log(this.isbn);
    }
}

let book = new Book('title','pag','isbn');  //criamos aqui um objeto chamada book da classe Book.

//podemos acessar as propriedades e atualizá-las deste modo:
console.log(book.title);
book.title = 'novo titulo';
console.log(book.title);
//podemos tb chamar a função da classe Book
book.printIsbn();
