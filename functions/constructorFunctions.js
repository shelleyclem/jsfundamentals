// Option 1

let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true
}

let person2 = {
    name: 'Jeremy',
    age: 15,
    canVote: false
}

let person3 = { 
    name: 'Tyler',
    age: 38, 
    canVote: true
}


//1        2           3
function Person(n, a, c) {
  
    //4   5       6    
    this.name = n;
    this.age = a;
    this.canVote - (a >= 18);

}

console.log(typeof Person);
 
//             7     8 
let person4 = new Person('James', 80, true);
let person5 = new Person('Sue', 16);
console.log(person4);
console.log(person5);

/* 
1: function keyword
2: fuction name. for constructor functions, the name should be capitalized: Person
3: parameters: these will be the VALUES of the object once this function is in use. 
4: The 'this' keyword. 'this' gives us the ability to refer back to wahtever called or activates it. In this case, 'this' refers to 'Person.
5. this will be a key of  the new object we will create. This is NOT referringto the parameter.
6. This is referring to the parameter.
7 & 8: the 'new' keyword is calling our Person function, creating a new person with the values we pass in as arguments, and storying that person in a variable.
*/

