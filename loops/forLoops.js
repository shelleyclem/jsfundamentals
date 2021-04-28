/* *****
!Loops
- offer us a quick and easy way to do something repeatedly, or loop over something 


- A loop has 3 parts:
    - initial expression
    - condition
    - increment expression
***** */

// set i to 0 (initial expression)
//while i is less than 10 (condition)
// i++ (means add 1) (increment expression)

//count 1-10 by ones
//for(let i = 0; i < 10; i++) {
//    console.log(i)
//}

//count to 20 by twos
//for(let i =  0; i<=20; i+=2) {
//    console.log(i);
//}

//loop count 10-1 by ones
/*for(let i = 10; i > 0; i -= 1) {
    console.log(i);
}

//count down to -24 from 0 by twos

for(let x = 0; x >= -24; x-=2) {
    console.log(x);
}

//go through a name and display each letter individually

let myName = 'Shelley'; 

for (let r = 0; r < myName.length; r++) {
    console.log(myName[r]);
}

console.log(myName.length);
*/

//make a loop where you add up all numbers from one to 50 

let sum=0;

for (let i = sum + 1;  i <= 50; sum , i++) {
    sum += i; }

    console.log(sum);
    