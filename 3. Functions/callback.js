//function who run in another function is callback
//example
const displayResult = function (data) {
    console.log(data);
}

const sumTwoNumber = (param1, param2, displayresult) => {
    const result = param1 + param2;
    displayResult(result);
}

sumTwoNumber(2,2,displayResult);