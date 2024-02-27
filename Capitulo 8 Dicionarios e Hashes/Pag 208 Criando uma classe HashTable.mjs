import { defaultToString } from "./defaultToString.mjs";
import { ValuePair } from "./ValuePair.mjs";
class HashTable{
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn;
        this.table = {};
    }

    //criando uma hash fuction loselose, que soma os valors ASCII de cada caracter\
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
        if(key != null && value != null){
            const position = this.hashCode(key);
            this.table[position] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    get(key){
        const valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    remove(key){
        const hash = this.hashCode(key);
        const valuePair = this.table[hash];
        if (valuePair != null){
            delete this.table[hash];
            return true;
        }
        return false;
    }

 
}

const hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com')
hash.put('Jonh', 'jonh@email.com')
hash.put('Tyrion', 'tyrion@email.com')
console.log(hash.hashCode('Gandalf'), '- Gandalf')
console.log(hash.hashCode('Jonh'), '- Jonh')
console.log(hash.hashCode('Tyrion'), '- Tyrion')

console.log(hash.get('Gandalf'))
console.log(hash.get('Aaron')) // meu nome tem o mesmo hashCode que Tyrion

hash.put('Aaron', 'aaron@email.com');
console.log(hash.get('Tyrion'), 'Tyrion'); 

hash.remove('Gandalf');
console.log(hash.get('Gandalf'))
