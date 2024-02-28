//A tecnica de encadeamento separado (separate chaining) consiste em criar uma lista ligada para cada posição da tabela e armazenar aí os elementos. É a tecnica mais simples de resolver colisões, mas utiliza mais memória. Precisamos então mudar como a entrada e saída de daods se comporta, ou seja, mudar os metodos put, get e remove.

import { defaultToString } from "./defaultToString.mjs";
import { LinkedList} from "./LinkedList.mjs" 
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

    
}

