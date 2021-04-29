let x = 12

function scope() {
    let x = 33;
    console.log(x);
}
scope()
console.log(x);


//pulls from local scope, but if nothing is available, it will see if there's anytning globally.

let y = 12;
function scopeTwo() {
    y = 33
    console.log(y);
}

console.log(y);
scopeTwo(); //made the next console.log pull from the function - difference from the previous example is that there is no let keyword in the function
console.log(y);

