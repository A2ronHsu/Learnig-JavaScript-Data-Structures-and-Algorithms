import { defaultCompare, swap, Compare, createNonSorted } from "./util.mjs";

function selectionSort(array, compareFn = defaultCompare){
    const {length} = array;
    let indexMin;
    for( let i = 0 ; i<length;i++){
        indexMin = i;
        for( let j = i; j<length; j++){
            if(compareFn(array[indexMin],array[j])===Compare.BIGGER_THAN){
                indexMin = j;
            }
        }
        if( i!== indexMin){
            swap(array, i, indexMin);
        }
    }
    return array;
}
let array = createNonSorted(5);
console.log(array.join());
array = selectionSort(array);
console.log(array.join());