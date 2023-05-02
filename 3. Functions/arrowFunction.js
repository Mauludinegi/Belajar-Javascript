//syntax arrow function
const sayHello = (name) => {
    console.log(`Hi, ${name}`);
}

//if function just have one parameter we can remove parenthesis
const sayHi = name => {
    console.log(`Hi, ${name}`);
}

//if we don't need parameter
const hallo = () => {
    console.log(`Hi`);
}

//if body of function just have one line, we can remove curly brackets
const sayName = name => console.log(`Hi, my name is ${name}`);

//we don't need return, if just have one line code in function
const multiply = (a, b) => a * b;
