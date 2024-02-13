var myVariable ='global';
myOtheVariable = 'global';

function myFunction(){
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction(){
    var myOtheVariable = 'local';
    return myOtheVariable
}

console.log(myVariable);
console.log(myFunction());
console.log(myOtheVariable);
console.log(myOtherFunction());
console.log(myOtheVariable);