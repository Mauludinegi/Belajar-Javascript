const date = new Date();
const timeInJakarta = date.toLocaleString('id-ID', {
    timeZone: 'Asia/Jakarta',
});

const timeInTokyo = date.toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo',
});

const timeInJayapura = date.toLocaleString('id-ID', {
    timeZone: 'Asia/Jayapura',
});

console.log(timeInJakarta);
console.log(timeInTokyo);
console.log(timeInJayapura);

//Array
const myArray = new Array('a', 'b', 'c', 'b', 'c');
console.log(myArray);

class UniqueArray extends Array {
    constructor(...args) {
        const uniqueValue = args.filter((item, index) => args.indexOf(item) == index);
        super(...uniqueValue);
    }

    push(item) {
        if(!this.includes(item)) {
            super.push(item);
        }
    }
}

const someArray = new UniqueArray('a', 'b', 'c', 'a', 'b', 'c');
console.log(someArray);
someArray.push('d');
console.log(someArray);
someArray.push('a');
console.log(someArray);