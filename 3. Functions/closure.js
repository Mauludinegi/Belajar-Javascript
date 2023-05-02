//closure make function like private
function init() {
    const name = "Jhon schemdy";

    function greet() {
        console.log(`hallo ${name}`);
    }
    greet();
}

init();

//another example
function say() {
    const name = "jhon schemedy";
    
    function greet() {
        console.log(`Hallo, ${name}`);
    }
    return greet;
}

const sayHello = say();
sayHello();
  