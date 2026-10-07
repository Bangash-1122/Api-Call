// design pattren in JavaScript 

// Module Pattren  
// ek design pattren hai jisme hum apan code ek self executing function (IIFE) me wrap krke ek private scope me rakhte hai 
// is se hum variable ko global scope me access hone se rokte hai 
// is ky ander se hum serf wahi cheezein return kr sakte hai jin ko hum bahar access krna chahte hai.
// is pattern ka main fayda hai data hiding (encapsulation) aur clean structure, taaki code secure, reusable, aur maintainable ho sake.


// let Bank = (function() {
//     let balance = 12000;

//     function deposit(amount) {
//         balance += amount;
//         console.log(`Deposited: ${amount}, New Balance: ${balance}`);
//     }

//     function withdraw(amount) {
//         if (amount > balance) {
//             console.log("Insufficient balance");
//             return;
//         }
//         balance -= amount;
//         console.log(`Withdrawn: ${amount}, New Balance: ${balance}`);
//     }

//     function getBalance() {
//         return balance;
//     }

//     return {
//         deposit: deposit,
//         withdraw: withdraw,
//         getBlance: getBalance,
//     };
// })()

// Bank.deposit(500);
// Bank.withdraw(4300);
// console.log(Bank.getBalance());

// Deposited: 500, New Balance: 12500
// Withdrawn: 4300, New Balance: 8200
// 8200


// Factory Function pattern
// Ek function banate ho jo objects create karta hia (factory = object banane ki machine ).
// factory function pattern ek aisa design pattern hai jisme hum ek simple function likhte hain jp naye objects banakar return karta hai,
// bina class ya new keyword ko use kiye.
// is pattern ka main idea hai -> objects creation ko ek function ke through control karna.
// Her bar jab tum factory function call karte ho, tumhe ek naye object milta hai.
// jisme apne methods aur (agar chaho to ) private variables bhi ho sakte hai.

//****************** */ example **********************

// function personFactory(name, age) {
//     return {
//         name: name,
//         age: age,
//         sayHello: function() {
//             console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//         }
//     };
// }

// let person1 = personFactory("John", 30);
// let person2 = personFactory("Jane", 25);

// person1.sayHello();
// person2.sayHello();

// Output:
// Hello, my name is John and I am 30 years old.
// Hello, my name is Jane and I am 25 years old.


function createProduct(name, price) {
    let stock = 10;
    return {
        name,
        price,
        buy: function(qty) {
            if (qty <= stock) {
                stock -= qty;
                console.log(`Booked - $${qty} pieces left ${stock}`);
            } else {
                console.error(`Out of stock - ${qty} pieces are not available.`);
            }
        },
        refill: function(qty) {
            stock += qty;
            console.log(`Refilled - ${qty} pieces added. New stock: ${stock}`);
        },
        getRemainingStock: function() {
            return stock;
        }
    };
};

let product1 = createProduct("Book", 10);
product1.buy(5);
product1.refill(2);
console.log(product1.getRemainingStock());

// Output 
// Booked - 5 pieces left 5
// Refilled - 2 pieces added. New stock: 7
// 7


// Singleton pattern
