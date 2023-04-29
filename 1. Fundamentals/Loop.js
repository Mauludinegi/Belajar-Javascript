//For Loop
let rows = 5
let str = "";
for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= rows - i; j++) {
        str += " ";        
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        str += "*";
    }
    str +="\n";
}
  console.log(str);

//For Of
let myArray = [1,2,3,4,5];
for (const iterator of myArray) {
    console.log(iterator);
}

//while
let i = 5;
while (i <= 10) {
   console.log(i);
   i++
}

//do-while
do {
    console.log(i);
    i++;
} while (i <= 15);

//infinite loop
let a = 1;
while (a <= 5) {
    console.log(a);
}