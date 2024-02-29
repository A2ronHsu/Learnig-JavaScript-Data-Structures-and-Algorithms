import { HashTable } from "./Pag208 Criando uma classe HashTable.mjs";
import { ValuePair } from "./ValuePair.mjs";
import { defaultToString } from "./defaultToString.mjs";

class HashTableLinearProbing extends HashTable{
    constructor(toStrFn = defaultToString){
        super(toStrFn)
    }
    put(key,value){
        if(key != null && value != null){
            const position = this.hashCode(key);
            if(this.table[position] == null){
                this.table[position] = new ValuePair(key, value);
            }else{
                let index = position + 1;
                while (this.table[index] != null){
                    index++;
                }
                this.table[index] = new ValuePair(key, value);
            }
            return true;
        }
        return false;
    }

    get(key){
        const position = this.hashCode(key);
        if(this.table[position] != null){
            if(this.table[position].key === key){
                return this.table[position].value;
            }
            let index = position+1;
            while (this.table[index] != null && this.table[index].key !== key){
                index++;
            }
            if(this.table[index] != null && this.table[index].key === key){
                return this.table[index].value;
            }
        }
        return undefined;
    }

    remove(key){
        const position = this.hashCode(key);
        if(this.table[position] != null){
            if(this.table[position].key === key){
                delete this.table[position];
                this.verifyRemoveSideEffect(key,position)
                return true;
            }
            let index = position+1;
            while (this.table[index] != null && this.table[index].key !== key){
                index++;
            }
            if(this.table[index] != null && this.table[index].key === key){
                delete this.table[index];
                this.verifyRemoveSideEffect(key, index);
                return true;
            }
        }
        return false;
    }

    verifyRemoveSideEffect(key, removedPosition){
        const hash = this.hashCode(key);
        let index = removedPosition + 1;
        while(this.table[index] != null){
            const posHash = this.hashCode(this.table[index].key);
            if(posHash <= hash || posHash <= removedPosition){
                this.table[removedPosition] = this.table[index];
                delete this.table[index];
                removedPosition=index;
            }
            index++
        }
    }

}

let hash = new HashTableLinearProbing();

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

console.log(hash);
hash.remove('Sue')
console.log(hash.get('Sargeras'));