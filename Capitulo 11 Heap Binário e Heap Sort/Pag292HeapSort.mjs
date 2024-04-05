import { defaultCompare, swap, Compare } from "./util.mjs";

function heapSort(array, compareFn= defaultCompare){
    let heapSize = array.length;
    buildMaxHeap(array, compareFn);
    while(heapSize>1){
        swap(array, 0, --heapSize);
        heapify(array, 0, heapSize, compareFn)
    }
}
function buildMaxHeap(array, compareFn){
    for(let i= Math.floor(array.length/2); i >= 0; i-=1){
        heapify(array, i, array.length, compareFn);
    }
}

function heapify(array, i, heapSize, compareFn){
    
    let element = i;
    const left = 2*element+1;
    const right = 2*element+2;
    const size = heapSize;
    if(left<size && compareFn(array[left],array[element] ) === Compare.BIGGER_THAN){
        element = left;
    }
    if(right<size && compareFn(array[right],array[element] ) === Compare.BIGGER_THAN){
        element = right;
    }
    if(i != element){
        swap(array,i,element);
        // console.log(i, element, array);
        heapify(array,element,heapSize,compareFn);
    }
    
}

const array = [6,2,3,4,5,1,7];
console.log(array);

heapSort(array);
console.log(array);