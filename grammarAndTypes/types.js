let number = 10;
console.log(number);

//Number: Literally a number (where as "number" = the word number)

//keyboard shortcut: log (box option)

/*String: datatypes used to represent text
    -wrap them in single or double quotes
    */


let stringOne = "doublequotes";
let stringTwo = 'singlequotes';

console.log(stringOne, stringTwo);

//Boolean: true or false

let on = true;
let off = false;

console.log(on, off);

//Null: an empty value

let empty = null; 
console.log(empty);

//Undefined: no value assigned 
let undef = undefined;

console.log(undef);

let correct;
console.log(correct);

//Null is like a container with nothing in it
//Undefined is when a variable has never been set or has not yet been created

//Objects: used to store many values instead of one single value
//denoted by curly braces {}

let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true,
}

console.log(frodo);

console.log(typeof frodo);


//Arrays: containers that hold lists of items
//denoted by square brackets []

let list = ['item 1', 'item 2', 'item 3'];
console.log(list);

//store different types of data in an array;

let burritos = ['large', 4, true];;
console.log(burritos);
console.log(typeof burritos);

//DataType Literals
//A literal represents a fixed value that we as developers insert into the code
//includes strings, numbers, booleans, objects, arrays 

//string literal
let car = 'Ford';

//numeric literal
let december = 12;

//boolean literal  
let tired = true;

//object literal 
let soup = {
    a: "chicken noodle",
    b: "tomato",
    c: "beef and barley"
};

//Array literal
let day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
