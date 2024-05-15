import { Compare, defaultCompare, DOES_NOT_EXIST } from "./util.mjs";

function binarySearch(array,value,compareFn = defaultCompare){
    const sortedArray = array.sort((a,b)=>a-b);
    let low = 0 ;
    let high = sortedArray.length-1;
    while(lesserOrEquals(low, high, compareFn)){
        const mid = Math.floor((low+high)/2);
        const element = sortedArray[mid];
        if(compareFn(element,value)===Compare.LESS_THAN){
            low = mid + 1;
        }else if(compareFn(element,value)=== Compare.BIGGER_THAN){
            high = mid - 1;
        }else{
            return mid;
        }
    }
    return DOES_NOT_EXIST;
}

function lesserOrEquals(a, b, compareFn){
    const comp = compareFn(a,b);
    return (comp === Compare.LESS_THAN) || (comp === Compare.EQUALS);
}

let array = [1,2,4,5,6,11,8,9,0,3]
console.log(array);
let index = binarySearch(array, 8)
console.log(array)
console.log (index)