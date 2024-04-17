import  {defaultToString} from "./util.mjs"
import { ValuePair } from "./ValuePair.mjs";

export class Dictionary{
    constructor( toStrFn = defaultToString){
        this.toStrFn =toStrFn;
        this.table = {};
    }

    hasKey(key){
        return this.table[this.toStrFn(key)] != null;
    }

    set(key,value){
        if(key != null && value != null){
            const tableKey = this.toStrFn(key)
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    remove(key){
        if (this.hasKey(key)){
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    get(key){
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    keyValues(){
        return Object.values(this.table);
    }

    keys(){
        return this.keyValues().map(valuePair => valuePair.key);
    }

    values(){
        return this.keyValues().map(valuePair => valuePair.value);
    }

    forEach(callBackFn){
        const valuePair = this.keyValues();
        for( let i = 0; i < valuePair.length; i++){
            const result = callBackFn(valuePair[i].key, valuePair[i].value);
            if (result ===false ){
                break;
            }
        }
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
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;
        for (let i = 1; i < valuePairs.length; i++){
            objString = `${objString},${valuePairs[i].toString()}`;
        }
        return objString;
    }
}
/*
const dictionary = new Dictionary();

dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('Jonh', 'jonh@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log('dictionary',dictionary);
console.log('dictionary.haskey(Gandalf)', dictionary.hasKey('Gandalf'));
console.log('dictionary.size())', dictionary.size());
console.log('dictionary.keys()', dictionary.keys());
console.log('dictionary.values()', dictionary.values());
console.log('dictionary.get(Tyrion)', dictionary.get('Tyrion'));



dictionary.remove('Jonh');
console.log('dictionary.keys()', dictionary.keys());
console.log('dictionary.values()', dictionary.values());
console.log('dictionary.keyValues()', dictionary.keyValues())

dictionary.forEach((k, v)=> console.log('forEach: ', `key: ${k}`, `value: ${v}` ))
*/