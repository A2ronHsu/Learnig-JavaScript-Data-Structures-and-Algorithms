import {defaultEquals} from "./util.mjs"

const DOES_NOT_EXIST = -1;
function sequentialSearch(array,value,equalsFn = defaultEquals){
    for(let i = 0; i < array.length; i++){
        if(equalsFn(value,array[i])){
            return i;
        }
    }
    return DOES_NOT_EXIST;
}
