//Named  Argument with spread operator
function namedArgument({params1 = 1, params2} = {}) {
    console.log(`Params1: ${params1}, Params2: ${params2}`);
}

namedArgument({
    params2: 2
});

