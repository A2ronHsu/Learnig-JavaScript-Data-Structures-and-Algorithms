import { defaultToString } from "./defaultToString.mjs";
import { ValuePair } from "./ValuePair.mjs";
export class HashTable{
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

    djb2HashCode(key){
        const tableKey = this.toStrFn(key);
        let hash = 5381;
        for( let i= 0; i< tableKey.length; i++){
            hash = (hash*33) + tableKey.charCodeAt(i);
        }
        return hash%1013;
    }

    hashCode(key){
        return this.djb2HashCode(key);
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

    size(){
        return Object.keys(this.table).length;
    }

    isEmpty(){
        return this.size() === 0;
    }

    clear(){
        this.table = {};
    }

    toString(){
        if ( this.isEmpty()){
            return '';
        }
        const keys = Object.keys(this.table);
        let objString = `${keys[0]} => ${this.table[keys[0]].toString()}` ;
        for (let i = 1; i < keys.length; i++){
            objString = `${objString},${keys[i]} => ${this.table[keys[i]].toString()}`;
        }
        return objString;
    }

 
}

// const hash = new HashTable();
// hash.put('Gandalf', 'gandalf@email.com')
// hash.put('Jonh', 'jonh@email.com')
// hash.put('Tyrion', 'tyrion@email.com')
// console.log(hash.hashCode('Gandalf'), '- Gandalf')
// console.log(hash.hashCode('Jonh'), '- Jonh')
// console.log(hash.hashCode('Tyrion'), '- Tyrion')

// console.log(hash.get('Gandalf'))
// console.log(hash.get('Aaron')) // meu nome tem o mesmo hashCode que Tyrion

// //hash.put('Aaron', 'aaron@email.com');
// console.log(hash.get('Tyrion'), 'Tyrion'); 

// //hash.remove('Gandalf');
// console.log(hash.toString())
// hash.clear();

// hash.put('Ygritte' , 'Ygrite@email.com');
// hash.put('Jonathan' , 'Jonathan@email.com');
// hash.put('Jamie' , 'jamie@email.com');
// hash.put('Jack' , 'jack@email.com');
// hash.put('Jasmine' , 'jasmine@email.com');
// hash.put('Jake' , 'jake@email.com');
// hash.put('Nathan' , 'nathan@email.com');
// hash.put('Athelstan' , 'athelstan@email.com');
// hash.put('Sue' , 'sue@email.com');
// hash.put('Aethelwulf' , 'aethewulf@email.com');
// hash.put('Sargeras' , 'sargeras@email.com');

// console.log(hash);