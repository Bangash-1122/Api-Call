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

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}


// Q8. ask the user for a number and print wether each number from 1 to the number is even or odd.


let num = prompt("give a number");

for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}


// Q9. Count how many numbers between 1 to 100 are  divisible by 3 abd 5.

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}