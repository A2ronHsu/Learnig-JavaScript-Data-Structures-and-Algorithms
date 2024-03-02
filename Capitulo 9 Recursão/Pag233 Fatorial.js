//usando for
function fatorialIterative(n){
    let total = 1;
    for (i=0; i < n; i++){
        total *= n-i;
    }
    return total;
}


//usando recursão
function fatorialRecursive(n){
    console.trace();
    if ( n === 0 || n === 1){
        return 1;
    }else{
        return n*fatorialRecursive(n-1);
    }
}
console.log(fatorialRecursive(3));