// Write a fucntion getGrade(score) that:
// Take a student's marks  (0 to 100)
// Returns the grade based on this logic: 
// 90-100: A+
// 80-89: A
// 70-79: B
// 60-69: C
// 33-59: D;
// 0-32: Fail
// Anything else  Invalid marks:!
// Early return pattern

// function getGrade(score) {
//     if (score >= 90 && score <= 100) return "A+";
//     if (score >= 80 && score <= 89) return "A";
//     if (score >= 70 && score <= 79) return "B";
//     if (score >= 60 && score <= 69) return "C";
//     if (score >= 33 && score <= 59) return "D";
//     if (score >= 0 && score <= 32) return "Fail";
//     else return "Invalid marks";
// }

// console.log(getGrade(26));

// // Rock-paper-scissors game:

// function rps(user, computer) {
//     // Rock > scissors
//     // Scissors > paper
//     // Paper > rock

//     if (user === computer) return "draw";

//     if (user === "rock" && computer === "scissors") return "user";
//     if (user === "scissors" && computer === "paper") return "user";
//     if (user === "paper" && computer === "rock") return "user";
//     return "computer";
// }

// console.log(rps("rock", "paper"));



//Repeat karna ko loop kehty hai:
// for, while, do-while, for-of, for-in, forEach:

//For loop:
// for(initialization; condition; increment/decrement){
//     //code to be repeated
// } 

// for (let i = 1; i < 101; i++) {
//     console.log(i);
// }
// let i = 1;
// while (i < 32) {
//     i++;
// }



// Q1. print number from 1 to 10 using a for loop.

// for (let i = 1; i < 11; i++) {
//     console.log(i);
// }

// Q2. print numbers from 10 to 1 using a while loop.


// let i = 10;
// while (i > 0) {
//     console.log(i);
//     i--;
// }

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// Q3. print even  numbers 1 to 29 use a for loop.

// for (let i = 1; i <= 29; i++) {

//     if (i % 2 === 0) {
//         console.log(i);
//     }

// }


// Q4. print odd numbers 1 to 15 using a while loop:

// let j = 1;
// while (j <= 15) {

//     if (j % 2 === 1) {
//         console.log(j);
//     }

//     j++;
// }


// Q5. print the multiplication table of 5 (i.e, 5* 1 = 5 .. 5 *10  = 50) using for loop: 

// for (let i = 1; i <= 10; i++) {
//     console.log(`5 * ${i} = ${5 * i}`);
// }

// Q6. find the sum of numbers from 1 to 100 using a for loop.

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

// Q7. Print all numbers between 1 to 50 that are divisible by 3.

// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }


// Q8. ask the user for a number and print wether each number from 1 to the number is even or odd.


// let num = prompt("give a number");

// for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`);
//     } else {
//         console.log(`${i} is odd`);
//     }
// }


// Q9. Count how many numbers between 1 to 100 are  divisible by 3 abd 5.

// for (let i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }
// }



// Q1. Stop at Frist Multiple of 7 :
// write a loop from 1 to 100 that:
// . prints each numbr 
// . stops completely when it finds the first number divisible by 7 

// for (let i = 1; i <= 100; i++) {
//     console.log(i); // It prints every number from 1 to 100
//     if (i % 7 === 0) {
//         break;
//         // console.log(i)// Print for this would not print 7 
//     }

// }

// Q2: Skip Multiples of 3:
// Write a loop from 1 to 20 that:
// . skips numbers divisible by 3
// . prints all other numbers:

// use continue:
// Expected output: 1,2,4,5,7,8,10,11,13,14,16,17,19,20


// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// Q3: print First 5 odd numbers Only 
// Write a loop from 1 to 100 that :

// .prints only 5 odd numbers
// Then stops the loop:

// use both if, Continue, and a counter +break

// Expected output: 1 3 5 7 9;
// let count = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 1) {
//         count++;
//         console.log(i);
//     }

//     if (count === 5) break;

// }

// //// /// Function started

// Q1. what's the difference between function declaration and expression in terms of hoisting?

// abc();

// function abc() { } // this is working

// const arr = function abc() {};
// this is show the error



// Q2. Use rest parameter to accept any number of scores and return the total.


// function getScore(...scores) {
//     let total = 0;
//     scores.forEach(function(value) {
//         total += value;
//     });
//     return total;
// }

// console.log(getScores(10, 20, 30, 40, 50));

// write a BMI calculator

// function bmiCalculator(weight, height) {
//     return weight / (height * height);
// }

// console.log(bmiCalculator(70, 1.75).toFixed(2));


// discount calculator:

// function discountCalculator(discount) {
//     return function(price) {
//         return price - (price * discount / 100);
//     }
// }

// let ten = discountCalculator(10);
// let twenty = discountCalculator(20);
// let fifty = discountCalculator(50);

// console.log(ten(1800));
// console.log(twenty(1800));
// console.log(fifty(1800));


// // closure:
// function counter() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     }
// }

// let abc = counter();
// console.log(abc()); // 1 hold the value id self in lexicl environemnt
// console.log(abc()); // 2
// console.log(abc()); // 3
// console.log(abc()); // 4
// console.log(abc()); // 5


// Create a pure function to transform a value

// function double(val) {
//     return val * 2;
// }

// console.log(double(5));

// use IIFE to isolate a variable  

// (function() {
//     const password = "secert password";
//     console.log(password);
// })();
// do not access to outside the iife 
// console.log(password);



// Array Concepts:

// Array methods: push, pop, shift, unshift, splice, slice, reverse, sort,
// map filter, reduce, find, some, every, flat, 


// let arr = [1, 2, 3, 4, 5]

// arr.push() // add the vale 
// arr.pop() // remove the last value
// arr.shift() // remove the first value
// arr.unshift() // add the value in frist
// arr.splice(2, 0, 10) // remove the 2 value and add 10
// arr.slice() // make a copy
// arr.reverse() // reverse the array
// arr.sort(function(a, b) {
//     return a - b;
// }) // sort the array accepted the function on based the value they retun assinding and desiending order

// forEach  accepted the fucntion and work the fucntion on every element in array no value return 
// arr.forEach(function(value) {
//     console.log(value + 5);
// })

// map srf tab use karna jab new array banana ho pichle array ke data ke bas per
// map dikhte he sath maaan main ek blank array bana liya karo
// arr.map(function(val) {
//     return 12; // return in new array on base of old array
//     //and you do not return anything in map then return "undefined" in new array
// })
// Kab use karna ha map ?
// jab be apko aisa koi case dikhe jahan par ek array se naya array banega and wo naya array kuch values ko rakhega tab map lagegha. That's it


// Filter in 
// Kab use karna ha filter?
// Jab be apko aisa koi case dikhe jahan par ek array se naya array banega and wo naya array  apki marzi hai wo kuch values ko rakhe ya na rakhe tab filter lagegha. That's it

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let evenNumber = arr.filter(function(val) {
//     if (val % 2 === 0) {
//         return val;
//     }
// })
// console.log(evenNumber);


// Reduce:
// reduce ka use tab hota ha jab apko ek array se single value nikalni ho 
// let arr = [1, 2, 3, 4, 5]

// let sum = arr.reduce(function(total, val) {
//     return total + val;
// }, 0)
// console.log(sum);

// Find now use the find :
// find ka use tab hota ha jab apko ek array se ek value nikalni ho to wo first value match hujaye to ush value ko nikal le 
// let arr = [1, 2, 3, 4, 5]

// let find = arr.find(function(val) {
//     return val > 4;
// })
// console.log(find);

// Some : matlab srf ek bhi condition match ho jaye to true return kare
// let arr = [1, 2, 3, 4, 5]

// let some = arr.some(function(val) {
//     return val > 4;
// })
// console.log(some);

// Every : matlab srf ek bhi condition match na ho to false return kare 
// let arr = [1, 2, 3, 4, 5]

// let every = arr.every(function(val) {
//     return val > 4;
// })
// console.log(every);

// Destructuring , spread operater.

// let arr = [1, 2, 3, 4, 5];
// let [a, b, , c] = arr; // [1, 2, 4] This is the destructuring simple example

// now is spread Operater:
// let arr = [1, 2, 3, 4, 5];

// let newArr = [...arr, 6, 7, 8];
// console.log(newArr);

// TO solve the sum question of arrays:

// Qs : Add "Mango" at the end and "Pineapple" at the beginning of the array.
// let fruits = ["Apple", "Banana", "Orange"];

// fruits.push("Mango");
// fruits.unshift("Pineapple");

// Qs : Replace "banana" with "kiwi" in the array above.

// let fruits = ["Apple", "Banana"];

// fruits.pop("Banana");
// fruits.push("Kiwi");

// Qs : Insert "Red" and "Blue" at index 1 in this array:

// let colors = ["Yellow", "Green", "Purple"];
// colors.splice(1, 0, "Red", "Blue");
// console.log(colors);

// Qs : Extract only the middle 3 elements from this array

// let items = [1, 2, 3, 4, 5, 6, 7];
// let middle = items.slice(1, 5);
// console.log(middle);

// Qs : Sort this array alphabetically and then reverse it

// let names = ["Zoya", "Abid", "Usama", "Abdullah", "Usman"];
// names.sort().reverse();
// console.log(names);

// Use.map() to square each number:
// let arr = [1, 2, 3, 4]

// let newArr = arr.map(function(val) {
//     return val * val;
// })
// console.log(newArr);


//Use.filter() to keep num of greter then 10
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// let newArr = arr.filter(val => {
//     return val > 10;
// })
// console.log(newArr);

// Use.reduce() to find the sum of this arrary:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let sum = arr.reduce(function(acc, val) {
//     return acc + val;
// }, 0)
// console.log(sum);

// // Use.find() to get the first num less then 10;
// let arr = [12, 15, 3, 8, 20];

// let first = arr.find(function(val) {
//     return val < 10;
// })

// console.log(first);


// Use.some() to check if any student has scored below 35:
// let marks = [45, 55, 25, 75, 85];

// let below35 = marks.some(function(val) {
//     return val < 35;
// })

// console.log(below35);

// Use .every() to check if all number are even:
// let arr = [2, 4, 6, 8, 10]

// let even = arr.every(function(val) {
//     return val % 2 === 0;
// })
// console.log(even);

// Destructuring this array to get firstName and lastName:

// let fullName = ["Ubaid", "Bangash"];
// let [firstName, lastName] = fullName;

// console.log(firstName);
// console.log(lastName);


// Merge two arrays using spread operator:

// let a = [1, 2]
// let b = [3, 4];

// let newArr = [...a, ...b];
// console.log(newArr);

// Add "India" to the start of this array using spread operater:
// let counteries = ["USA", "UK", "Germany"];

// let newCounteries = ["India", ...counteries];
// console.log(newCounteries);

// Clone this array properly (not by reference):

// let arr = [1, 2, 3];
// let arr2 = [...arr];
// console.log(arr2);


// Object Concepts:
// let obj = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
// let aa = "name"
// obj[aa]
// Access object properties
// console.log(obj.name);

// Nasted and deep object:

// const user = {
//     id: 1,
//     name: "Ubaid",
//     age: 25,
//     address: {
//         city: "Karachi",
//         country: "Pakistan",
//         location: {
//             lat: 24.8609641,
//             lng: 67.0011368,
//         }
//     }
// };
// user.address.location.lng;
// console.log(user.address.location.lng);
// let {lat, lng} = user.address.location;
// lng access only lng to check out the value besacuse your creteing the veriable

// loops on object for-in object.keys, object.entries

// let obj = {
//     name: "Ubaid",
//     age: 26,
//     email: "[EMAIL_ADDRESS]",
//     city: "Peshawar"
// };
// for (let key in obj) {
//     obj[key]
// }

// Destructure the key "first-name" as a variable called firstname

// const user = {
//     "first-name": "Bangash",
// };
// let {
//     "first-name": firstname
// } = user;