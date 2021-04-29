/*

-First Pass: Stores our variables declarations (essentially says, "hey, I know a variable of x is defined, so let me store that in my memory so I know it's there") but does not assign them their values. 
    -Anything that needs to be hoisted, is hoisted.

-Second Pass: Assigns the values to our variables and executes any hoisted source code.



*/

//console.log(myName);
let myName = 'Eric'

//console.log(randomVariable);

b()

function b() {
    console.log("I have been hoisted");
}

//works on function but not first console log example because the console log is executing something.  First pass ignores invocation and recognizes cl 'I have been hoisted' and then on second executes the invocation. 

