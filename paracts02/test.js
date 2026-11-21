let a = 10;
let b = 20;
let c;
c = a // c = 10, copy the value , a = 10;
a = b; // a = 20; and b = 20;
b = c; // b = 10

console.log(a, b);

// Then out swap the values a = 20; and b = 10;

// swapping the anather method

let x = 10;
let y = 20;

[a, b] = [b, a] // swaping the value in destructring way

console.log(a, b);

     // Then output x = 20; and y = 10; this si the answer

