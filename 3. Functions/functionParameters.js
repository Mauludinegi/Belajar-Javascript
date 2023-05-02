//Default Parameters
function exponenstFormula(baseNumber, exponent = 2) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber} ^ ${exponent} = ${result}`);
}

exponenstFormula(2);

//Rest Parameter
function sum(..._params) {
    let result = 0;
    for (const res of _params) {
        result += res;
    }
    return result;
}

console.log(sum(1,2,3,4));