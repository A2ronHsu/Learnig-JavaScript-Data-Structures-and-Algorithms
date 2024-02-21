class Set {
    constructor(){
        this.items = {};
    }

    //verificar se um elemento existe no Set
    //O operador in e o metodo  Object.prototype.hasOwnProperty() em JavaScript é usado para verificar se uma determinada propriedade existe em um objeto. Ele retorna true se a propriedade especificada estiver presente no objeto, caso contrário, retorna false.
    // has(element){
    //     return element in this.items;  // retorna true se element existir na cadeia de prototipos do objeto this.items
    // };

    has(element){
        return Object.prototype.hasOwnProperty.call(this.items, element); //retorna true se element existir somente no objeto this.items, sem considerar a cadeia de prototipos
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
    }

    //adicionando um novo elemento no Set()
    add(element){
        if (!this.has(element)){
            this.items[element] = element;
            return true;
        }
        return false;
    };

    //removendo elementos
    delete(element){
        if(this.has(element)){
            delete this.items[element];
            return true;
        }
        return false;
    };

    
    clear(){
        this.items = {};
    };

    //aqui podemos usar metodos da classe nativa Object.keys ou usar um for...in. Poderiamos tambem ter definido um contador no construtor e somar o contador no metodo add() e subtrair no metodo delete();
    size(){
        return Object.keys(this.items).length; //o metodo .key devolve um array de todas as chavez do objeto passado como argumento
    };

    //usando for...in para obter size(). usando for...in abrangeriamos um codigo para navegadores mais antigos
    sizeLegacy(){
        let count = 0;
        for (let key in this.items){
            if(this.items.hasOwnProperty(key)){
                count++;
            }
        }
        return count;
    };

    //retornando um array com todos os elementos do Set
    //podemos usar o metodo Object.values() que retorna um array com os valores do objeto
    values(){
        return Object.values(this.items);
    };

    //para navegadores antigos usariamos um for...in
    valuesLegacy(){
        let value = []
        for (let key in this.items){
            value.push(key);
        }
        return value;
    }


}

const set = new Set();

set.add(1);
console.log(set.values());
console.log(set.has(1),1);
console.log(set.size(),1);
set.add(2);
console.log(set.values());
console.log(set.has(2),2);
console.log(set.size(),2);
set.delete(1);
console.log(set.values());
set.delete(2);
console.log(set.values());






