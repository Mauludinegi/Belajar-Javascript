//initialize map
const myMap = new Map();

//if wanna set default map, the use array multidimention
 const secondMap = new Map([
    ['1', 'a string key'],
    [1, 'a number key'],
    [true, true]
 ]);

console.log(secondMap + "\n");

const capital = new Map([
    ['Jakarta', 'Indonesia'],
    ['London', 'England'],
    ['Washington', 'United State'],
    ['Riyadh', 'Saudi Arabia'],
    ['Tokyo', "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London") + "\n");

//add new key-value
capital.set('Seoul', "Korea");

console.log(capital.size);
console.log(capital.get('Seoul'));
