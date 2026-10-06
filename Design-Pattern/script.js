/ design pattren in JavaScript 

// Module Pattren  
// ek design pattren hai jisme hum apan code ek self executing function (IIFE) me wrap krke ek private scope me rakhte hai 
// is se hum variable ko global scope me access hone se rokte hai 
// is ky ander se hum serf wahi cheezein return kr sakte hai jin ko hum bahar access krna chahte hai.
// is pattern ka main fayda hai data hiding (encapsulation) aur clean structure, taaki code secure, reusable, aur maintainable ho sake.


let Bank = (function() {
    let balance = 12000;

    function deposit(amount) {
        balance += amount;
        console.log(`Deposited: ${amount}, New Balance: ${balance}`);
    }

    function withdraw(amount) {
        if (amount > balance) {
            console.log("Insufficient balance");
            return;
        }
        balance -= amount;
        console.log(`Withdrawn: ${amount}, New Balance: ${balance}`);
    }

    function getBalance() {
        return balance;
    }

    return {
        deposit: deposit,
        withdraw: withdraw,
        getBalance: getBalance
    };
})()

Bank.deposit(500);
Bank.withdraw(4300);
console.log(Bank.getBalance());
// Deposited: 500, New Balance: 12500
// Withdrawn: 4300, New Balance: 8200
// 8200
