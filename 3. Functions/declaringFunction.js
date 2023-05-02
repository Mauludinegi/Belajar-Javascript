//Parameter & argument
function multiply(params1, params2) {
    return params1 * params2;
}

let argument = multiply(2, 2);
console.log(argument);

//Expression Function
const greeting = function(name, leanguage) {
    if (leanguage == "Indonesia") {
        return `Hallo, Apa kabar ${name}?`
    } else if(leanguage == "inggris") {
        return `Hi, How are you ${name}?`
    } else if(leanguage == "japan") {
        return `Ohayou, Ogenki desu ka ${name}?`
    } else {
        "Unknown";
    }
}

console.log(greeting('gajah', 'japan'));