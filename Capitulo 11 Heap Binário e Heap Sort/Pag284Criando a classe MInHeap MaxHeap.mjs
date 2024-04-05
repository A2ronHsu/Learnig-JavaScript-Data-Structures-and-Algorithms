export function swap(array, a, b){
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}


import { Compare, defaultCompare, reverseCompare } from "./util.mjs";
export class MinHeap{
    constructor(compareFn = defaultCompare){
        this.compareFn = compareFn;
        this.heap= [];
    }
    getLeftIndex(index){
        return 2*index+1;
    }
    getRightIndex(index){
        return 2*index+2;
    }
    getParentIndex(index){
        if (index === 0) return undefined;
        return Math.floor((index - 1)/2)
    }

    insert(value){
        if(value != null){
            this.heap.push(value);
            this.sifUP(this.heap.length-1);
            return true;
        }
        return false;
    }
    sifUP(index){
        let parent = this.getParentIndex(index);
        while(index > 0 && this.compareFn(this.heap[parent], this.heap[index])===Compare.BIGGER_THAN){
            swap(this.heap, parent, index);
            index = parent;
            parent = this.getParentIndex(index);
        }
    }

    size(){
        return this.heap.length;
    }
    isEmpty(){
        return this.size === 0;
    }
    findMinimum(){
        return this.isEmpty()? undefined : this.heap[0];
    }

    
    extract(){
        if(this.isEmpty()){
            return undefined;
        }
        if(this.size()===1){
            return this.heap.shift();
        }
        const removedValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sifDown(0);
        return removedValue;
    }
    sifDown(index){
        let element = index;
        const left = this.getLeftIndex(index);
        const right = this.getRightIndex(index);
        const size = this.size();
        if(left<size && this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN){
            element = left;
        }
        if(right<size && this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN){
            element = right;
        }
        if(index != element){
            swap(this.heap,index,element);
            console.log(this.heap);
            this.sifDown(element);
        }
    }
}

export class MaxHeap extends MinHeap{
    constructor(compareFn = defaultCompare){
        super(compareFn);
        this.compareFn = reverseCompare(compareFn);
    }
}



let heap = new MaxHeap();
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(1);
heap.extract();



console.log(heap);