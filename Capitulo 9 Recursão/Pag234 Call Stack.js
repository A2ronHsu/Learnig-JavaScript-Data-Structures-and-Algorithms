let i = 0;
function recursiveFn(){
    i++;
    recursiveFn()
}
try{
    recursiveFn();
} catch(ex){
    console.error('i = ' + i +' error: '+ ex);
}