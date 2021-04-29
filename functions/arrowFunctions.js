/* 

   1         2 
let hi = () => {
    console.log('hi');
}

1: We need to set the fat arrow function to a variable
2: We use the 'fat arrow' to signify its a function.

- arrow functions (fat arrow functions) introduce in Es6.
    - a more concise way to write function expressions *not declarations
    - arrow functions do NOT get hoisted.
- 2 types of arrow functions: 
    - concise body
    - block body
*/

//Concise Body
let hi = () => console.log('hi');
//concise body arrow functions return by default
//hi();

//Block Body
//let hi = () => {
    console.log('hi');
// }
//block body arrow functions must have a return in the body of the function (inside the curly bois {})

let apples = x => console.log(`There are ${x} apples`);
apples(10);
apples('rotten'); 

let bananas = x => console.log(`There are ${x} apples`);
bananas(10);

//If no or multiparameters are needed - use ()
//do not need () if we are only passing 1 parameter