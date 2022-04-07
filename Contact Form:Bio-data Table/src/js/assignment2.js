function mostFrequentInteger(array,valueToFind) {
    let counter=0;
    for (let index = 0; index < array.length; index++) {
        if (array[index]===valueToFind) {
            counter+=1;
        }
        
    }
    return counter;    
}

console.log(mostFrequentInteger([1,2,34,1,1,3,5,5,5,1],5));


function NumberGreaterThanItsTwoNeighbours(array,value){
    
    for (let index = 1; index < array.length-1; index++) {
       if (array[index]==value) {
        if (value>array[index-1]&& value>array[index+1]) {
            return index;
         }
       } 
    }
    return -1;
}
console.log(NumberGreaterThanItsTwoNeighbours([1,2,6,4,9,11,3],11))