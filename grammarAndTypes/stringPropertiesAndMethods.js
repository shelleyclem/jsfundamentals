/*
String Properties 
-properties associated with a datatype
-strings have only one property and it is the length property

*/

let myName = "Shelley Clem"
console.log(myName.length);

/* 
String Methods
-methods are tools that can help us manipulate our data
-have paranthesis at the end (vs . for property ^ .length)
- method()
-methods associatedfunctions associated with datatypes
*/

console.log(myName.toUpperCase());
//.toUpperCase() will capitalize all letters

let home = 'My home is Indiana'
console.log(home.includes('Indiana'));
console.log(home.includes('Indy')); 
//.includes will check if a certain string is included in another string

let sent = 'This sentence will be split into individual places';
console.log(sent.split(""));
