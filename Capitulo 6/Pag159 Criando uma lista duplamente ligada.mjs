import LinkedList from "./Pag146 Criando uma LinkedList.mjs";
import { defaultEquals } from "./defaultEquals.mjs";
import { Node } from "./Node.mjs";

//extends é uma palavra-chave usada em classes para criar uma nova classe como uma extensão de uma classe existente, permitindo a herança de propriedades e métodos da classe pai (superclasse). A classe filha (subclasse) herda todos os métodos e propriedades da classe pai. Isso permite que você reutilize o código e estabeleça uma relação de hierarquia entre as classes.

//Em JavaScript, super é uma palavra-chave que é usada dentro de métodos de uma classe filha (subclasse) para chamar métodos da classe pai (superclasse). Isso é especialmente útil quando você está estendendo uma classe e deseja acessar métodos ou propriedades da classe pai. super() pode ser usado para chamar metodos ou o construtor da classe pai.

class DoublyNode extends Node{
    constructor(element, next, prev){
        super(element,next);
        this.prev = prev
    }
}

class DoublyLinkedList extends LinkedList{
    constructor(equalsFn = defaultEquals){
        super(equalsFn);
        this.tail = undefined;
    }
}