//compara dois valores adjacentes em uma estrutura de dados e troca os valores caso o primeiro for maior que o segundo, fazendo o maior valor "flutuar para cima"
import { Compare, createNonSorted, defaultCompare, swap } from "./util.mjs";


function bubbleSort(array, compareFn=defaultCompare){
    let {length} = array;
    for(let i = 0; i<length;i++){
        for(let j = 0; j<length-1; j++){
            if (compareFn(array[j],array[j+1]) === Compare.BIGGER_THAN) {
                swap(array, j, j+1);                
            }
        }
    }
    return array;
}


function modifiedBubbleSort(array, compareFn = defaultCompare){
    let {length} = array;
    for(let i = 0; i<length;i++){
        for(let j = 0; j<length-i-1; j++){
            if (compareFn(array[j],array[j+1]) === Compare.BIGGER_THAN) {
                swap(array, j, j+1);                
            }
        }
    }
    return array;
}


let array = createNonSorted(5);
console.log(array.join());
array = modifiedBubbleSort(array);
console.log(array.join());
