/*
 !For In Loops

- great for iterating over values in an object
- properties in objects are what's called enumberable 
-enumerable just means 'countable'
 */

let student = {
    studentName: 'Jake from State Farm',
    awesome: true,
    degree: "insurance sales",
    age: 98
};

for (item in student) {
    console.log(item);
    console.log(student[item]);
}

