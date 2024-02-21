//numa lista ligada ordedenada, mantemos os elementos ordenados inserindo eles nas posições correntas.
//Vamos começar declarando uma classe SorterLinkedList, e algumas funções auxiliares

import LinkedList from "./Pag146 Criando uma LinkedList.mjs";
import { defaultEquals } from "./defaultEquals.mjs";

//objeto de comparação, -1 para "menor que" e 1 para maior que
const Compare = {
    LESS_THAN:-1,
    BIGGER_THAN:1
};

//função de comparação
function defaultCompare(a,b){
    if(a === b){
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

//classe SortedLinkedList
class SortedLinkedList extends LinkedList{
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare){ //atribuimos as funções a seus repectivas referencias
        super(equalsFn); //chamamos os construtores da classe mãe
        this.compareFn = compareFn; // atribuimos a referencia a defaultCompare a compareFn;
    }

    //inserindo elementos em ordem crescente
    insert(element, index=0){  //fazemos o default do index ser 0, assim podemos desconsiderar seu valor caso for usada.
        if(this.isEmpty()){ // se a lista estiver vazia inserimos com a função insert da classe mãe com a palavra reservada super
            return super.insert(element,0);
        }
        const pos = this.getIndexNextSortedElement(element); //se a lista nao estiver vazia usamos a função gerIndexNextSortedElement() para encontra a posição que devemos inserir o novo element
        return super.insert(element, pos); // usamos função da classe mãe super.insert()  para inserir element na posição pos
    }

    //função auxiliar para obter a posição pos para função insert
    getIndexNextSortedElement(element){
        let current = this.head; //inicializamos current com o primeiro elemento
        let i = 0;//i está no escopo da função, fora do for
        for(;i<this.size() && current; i++){//deixamos o primeiro argumento do for vazio
            const comp = this.compareFn(element,current.element); //armazenamos em comp se o element é maior ou menor que current.element
            if (comp === Compare.LESS_THAN){ // se for menor a current
                return i; // retornamos o valor de current
            }
            current = current.next; //iteramos para o proximo current.element
        }
        return i; //se element for maior que todos os elementos da lista, retorna i, que será igual a this.size(), a proxima posição do ultimo elemento da lista.
    }
}