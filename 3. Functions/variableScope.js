//global variable
const a = null;

function parent() {
    const b = null;

    function child() {
        const c = b;
    }
}

console.log(parent());
