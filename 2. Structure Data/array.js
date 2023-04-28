const myArray = [3,2,1,5,4];

//bubble sort asc
for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray.length-1; j++) {
        if(myArray[j] > myArray[j + 1]) {
            let temp = myArray[j];
            myArray[j] = myArray[j + 1];
            myArray[j + 1] = temp;
        }        
    }    
}
delete myArray[1];
myArray.splice(1,1);
myArray.splice(1, 0, 7);
//bubble sort desc
for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray.length-1; j++) {
        if(myArray[j] < myArray[j + 1]) {
            let temp = myArray[j];
            myArray[j] = myArray[j+1];
            myArray[j+1] = temp;
        }        
    }
}

console.log(myArray.toString());
