//a classe nativa já possue metodos como add(), delete(), e clear(), has(), values()
//algumas novos metodos foram adcionados em 2024, mas não está disponivel em node v20, portando vamos fazer nós mesmos funções para simular as operações entre conjuntos

const union = (set1, set2)=>{
    const unionSet = new Set([...set1.values(), ...set2.values()]);
    return unionSet;
}

const intersection= (set1, set2) => {
    const intersectionSet = new Set();
    let biggerSet = set1;
    let smallerSet = set2;
    if(biggerSet.size < smallerSet.size){
        biggerSet = set2;
        smallerSet = set1; 
    }

    for (let elem of smallerSet.values()){
        if (biggerSet.has(elem)) intersectionSet.add(elem);
    }
    return intersectionSet;
}


const difference = (set1 , set2) => {
    const differenceSet = new Set();
    set1.forEach(value =>{
        if (!set2.has(value)) differenceSet.add(value)
    });
    return differenceSet;
}



let [set1 , set2] = [new Set(), new Set()]
set1.add(1);
set1.add(2);
set1.add(3);

set2.add(2);
set2.add(3);
set2.add(4);

console.log('set1',set1);
console.log('set2',set2);
console.log('union',union(set1, set2));
console.log('intersection',intersection(set1, set2));
console.log('difference',difference(set1, set2));
console.log('difference',difference(set2, set1));