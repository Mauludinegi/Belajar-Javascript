//set is structure data for unique value and doesn't sequeantially
//define set
const numberSet = new Set();

//example of set
const example = new Set([1,2,3,2,5]);
console.log(example);

//output Set(4) { 1, 2, 3, 5 }
//set will remove duplicate value

//for adding data on set, we can use add()
const animal = new Set(['elephant', 'cow', 'tiger', 'tiger']);
animal.add('lion');
animal.add('lion');
animal.add('girafe');
console.log(animal);

// for deleting data, we can use delete()
animal.delete('lion');
animal.delete('girafe');
console.log(animal);