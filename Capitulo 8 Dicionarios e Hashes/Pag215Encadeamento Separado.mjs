//A tecnica de encadeamento separado (separate chaining) consiste em criar uma lista ligada para cada posição da tabela e armazenar aí os elementos. É a tecnica mais simples de resolver colisões, mas utiliza mais memória. Precisamos então mudar como a entrada e saída de daods se comporta, ou seja, mudar os metodos put, get e remove.

import { defaultToString } from "./defaultToString.mjs";
import { LinkedList} from "./LinkedList.mjs" 
import { ValuePair } from "./ValuePair.mjs";
class HashTableSeparateChaining{
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn;
        this.table = {};
    }

    loseloseHashCode(key){
        if (typeof key === 'number') {
            return key;
        }

        const tableKey = this.toStrFn(key);
        let hash = 0;
        for(let i = 0; i< tableKey.length ; i++){
            hash+=tableKey.charCodeAt(i);
        }
        return hash %37;
    }

    hashCode(key){
        return this.loseloseHashCode(key);
    }

    put(key, value){
        if (key != null && value != null){
            const position = this.hashCode(key);
            if (this.table[position] == null){
                this.table[position] = new LinkedList();
            }
            this.table[position].push(new ValuePair(key,value));
            return true;
        }
        return false;
    }

    get(key){
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if( linkedList != null && !linkedList.isEmpty()){
            let current = linkedList.getHead();
            while(current != null){
                if(current.element.key === key){
                    return current.element.value;
                }
                current = current.next;
            }
        }
        return undefined;
    }

    remove(key){
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if(linkedList != null && !linkedList.isEmpty()){
            let current = linkedList.getHead();
            while ( current != null){
                if (current.element.key === key){
                    linkedList.remove(current.element);
                    if(linkedList.isEmpty()){
                        delete this.table[position];
                    }
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }
}

let hash = new HashTableSeparateChaining();
hash.put('Ygritte' , 'Ygrite@email.com');
hash.put('Jonathan' , 'Jonathan@email.com');
hash.put('Jamie' , 'jamie@email.com');
hash.put('Jack' , 'jack@email.com');
hash.put('Jasmine' , 'jasmine@email.com');
hash.put('Jake' , 'jake@email.com');
hash.put('Nathan' , 'nathan@email.com');
hash.put('Athelstan' , 'athelstan@email.com');
hash.put('Sue' , 'sue@email.com');
hash.put('Aethelwulf' , 'aethewulf@email.com');
hash.put('Sargeras' , 'sargeras@email.com');
hash.remove("Jasmine");
hash.remove("Jonathan");

console.log(hash);
console.log(hash.get("Athelstan"));