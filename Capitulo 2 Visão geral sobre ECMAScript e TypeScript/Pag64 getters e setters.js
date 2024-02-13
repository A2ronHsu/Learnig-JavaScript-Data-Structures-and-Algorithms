//Getters e setters são métodos(funçoes) especiais que permitem acessar e modificar os valores de propriedades de um objeto de maneira controlada. Eles são usados para implementar uma forma de encapsulamento em JavaScript, permitindo que você defina a lógica por trás do acesso e da modificação de dados de uma propriedade.

// Encapsulamento: É o conceito de agrupar dados (atributos) e métodos (funções) que operam nesses dados em uma única unidade chamada "objeto". O encapsulamento ajuda a organizar o código e a restringir o acesso direto aos detalhes internos do objeto.

//Um getter é um método que é usado para obter o valor de uma propriedade. Ele é declarado usando a palavra-chave get. Um getter é chamado quando você tenta acessar a propriedade correspondente.

//Um setter é um método que é usado para definir o valor de uma propriedade. Ele é declarado usando a palavra-chave set. Um setter é chamado quando você tenta atribuir um valor à propriedade correspondente.

//a seguir um exemplo de uma classe que declara uma função get e uma função set, juntos com seu uso:

class Person{
    constructor(name){
        this._name = name;
    }

    get name(){ //get perminte o acesso ao atributo name
        return this._name;
    }

    set name(value){// set permite atribuir valores ao atributo name
        this._name = value;
    }
}

let lotrChar = new Person('Frodo');

console.log(lotrChar.name);

lotrChar.name = 'Gandalf';
console.log(lotrChar.name);

lotrChar._name = 'Sam';
console.log(lotrChar.name);

