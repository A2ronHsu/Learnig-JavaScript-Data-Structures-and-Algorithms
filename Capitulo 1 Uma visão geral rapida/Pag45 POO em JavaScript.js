// A Programação Orientada a Objetos (POO) é um paradigma de programação que se baseia no conceito de "objetos", que podem conter dados na forma de campos (também conhecidos como atributos ou propriedades) e códigos, na forma de procedimentos (também conhecidos como métodos).

// Os principais princípios da programação orientada a objetos incluem:

// Encapsulamento: É o conceito de agrupar dados (atributos) e métodos (funções) que operam nesses dados em uma única unidade chamada "objeto". O encapsulamento ajuda a organizar o código e a restringir o acesso direto aos detalhes internos do objeto.

// Herança: Permite que uma classe (um modelo de objeto) herde propriedades e métodos de outra classe. Isso promove a reutilização de código e a criação de hierarquias de classes.

// Polimorfismo: Permite que objetos de diferentes classes sejam tratados como objetos da mesma classe por meio de uma interface comum. Isso facilita a flexibilidade e a extensibilidade do código.

// Abstração: Permite modelar objetos do mundo real de forma mais fiel, abstraindo (omitindo) detalhes irrelevantes e destacando as características mais importantes para um determinado contexto.

// Em linguagens que suportam programação orientada a objetos, como Java, C++, Python, JavaScript (em parte), entre outras, você cria classes que servem como modelos para objetos. Essas classes podem ser instanciadas para criar objetos individuais.

//podemos criar um objeto de algumas formas no javaScript

var obj = new Object(); // criamos um objeto com a função construtora Object() e a atribuimos à variavel obj

var obj = {}; // criamos um objeto usando a notação literal (chaves), é a forma mais simples e legivel.

//podemos declarar um objeto já com seu atributos (ou propriedades)

obj = {      //já declaramos o objeto em obj = {}
    name: {   //`name` é uma propriedade(ou atributo) de obj. Tambem se diz que a `name` é uma chave associado ao `obj`
        //`first` e `last` são valores associadas a chave `name`;
        first: 'Gandalf',
        last: 'the Grey'
    },
    address: 'Middle Earth'  
};

//chave é o nome do atributo, valor é a informação associada a uma chave.
//todo objeto é definido com pares de [chave: valor] 

//Em POO, um objeto é uma instancia de uma classe. Uma classe define as caracteristicas de um objeto.
//eis o modo de declarar uma classe (construtor) que representa um livro:
function Book(title,pages,isbn){
    this.title= title;
    this.pages= pages;
    this.isbn = isbn;
}
//para instaciar essa classe, podemos usar o código a seguir:
var book = new Book('title','pag','isbn');
//podemos acessar as propriedades e atualizá-las deste modo:
console.log(book.title);
book.title = 'novo titulo';
console.log(book.title);
//uma classe tb pode conter funções (em geral chamados de métodos):
book.title = 'mais um titulo novo';
Book.prototype.printTitle = function(){
    console.log(this.title);
};

book.printTitle();


//tb podemos declarar funções diretamente na definição da classe:

function Book(title,pages,isbn){
    this.title =title;
    this.pages =pages;
    this.isbn = isbn;
    this.printIsbn = function(){
        console.log(this.isbn)
    }
}
