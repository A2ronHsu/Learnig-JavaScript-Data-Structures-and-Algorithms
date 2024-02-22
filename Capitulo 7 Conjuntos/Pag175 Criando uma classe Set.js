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

    union(otherSet){
        const unionSet = new Set();
        this.values().forEach( value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }

    //intersection iterando por todos os elementos
    // intersection(otherSet){
    //     const intersectionSet = new Set();
    //     const values = this.values();
    //     values.forEach(elem =>{
    //         if (otherSet.has(elem)) intersectionSet.add(elem);
    //     })
    //     return intersectionSet;
    // }

    intersection(otherSet){
        const intersectionSet =new Set();
        const values =this.values();
        const otherValues = otherSet.values();
        let biggerSet = values;
        let smallerSet = otherValues;
        if( values.length < otherValues.length){
            biggerSet = otherValues;
            smallerSet = values;
        }
        smallerSet.forEach(value => {
            if (biggerSet.includes(value)){
                intersectionSet.add(value);
            }
        })
        return intersectionSet;
    }

    difference(otherSet){
        const differenceSet = new Set();
        this.values().forEach(value=>{
            if( otherSet.has(value)){
                differenceSet.add(value);
            }
        });
        return differenceSet;
    }

    isSubsetOf(otherSet){
        const isSubset = true
    }

}

const setA= new Set();
let setB = new Set();

setA.add(1);
setA.add(2);
setA.add(3);
setB.add(4);
setB.add(5);
setB.add(6);


let setAUB = setA.union(setB);
console.log(setAUB);

console.log(setB)
console.log(setAUB.intersection(setB))
setB.delete(6);
console.log(setA.difference(setAUB));
