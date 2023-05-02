function sum(...params) {
    return params.reduce((total, bil) => total + bil);
}
console.log(sum(1,2,3));

function processData(...data) {
    let callback = data.pop();
    callback();
}

processData(1,2,3, function(){
    let i = 0;
    for (const result of arguments) {
        i += result;
    }
    console.log(i);
})

function myParamFunc (param1, param2, ...param3) {
    console.log("param1: ", param1);
    console.log("param2: ", param2);
    console.log("param3: ", param3);
};

myParamFunc(
    'parameter pertama',
    'parameter kedua',
    1,2,3,4
);