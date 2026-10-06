// const {
//     setTimeout
// } = require("timers/promises");

// const {
//     setTimeout
// } = require("timers/promises");

// class CreatePencil {
//     constructor(name, compeny, price, color) {
//         this.name = name;
//         this.compeny = compeny;
//         this.price = price;
//         this.color = color;
//     }

//     write(text) {
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = this.color;
//         document.body.appendChild(h1);
//     }
// };
// let p1 = new CreatePencil("Natraj", "Natraj", 10, "black");
// let p2 = new CreatePencil("Apsara", "Apsara", 20, "red");

// koi bhi code js mein line by line chalegga.aur ye natural pattern bhi hota hai ki code line by line chale,
// but kabi kabar aise cases aate hai  life mein  jaha per appka code wait karta  hai and utni der main agle code chal jata hai.

// synchronous code
// aisa code jo line by line execute ho wos ko synchrnous code kahte hai.


// asynchronous code
// aisa code jo wait kare jab time aye to chaly wosy asynchronous code kahte hai.

// Call-back function 
// function callBack(fn) {
//     setTimeout(fn, Math.floor(Math.random() * 10) + 1000);
// }

// callBack(function() {
//     console.log("hey");
// });
// Example output is "hey" but delayd 1sec to 11sec.
// Ek function ko agar app ek aur function bhej de rahe ho parameter mein,
// to wo parameter wala function ko callback function kahte hai.


// this is the call-back Hill;
// function profileLakarAao(username, cb) {
//     console.log("Fetching profile...");
//     setTimeout(() => {
//         cb({
//             id: 1202,
//             username: username,
//             age: 10,
//             email: "huihui@hui.com",
//         });
//     }, 2000);
// }


// function saarePostLakarAao(id, cb) {
//     console.log("Fetching posts...");
//     setTimeout(() => {
//         cb({
//             id: 1202,
//             posts: ["hello my name is ubaid", "i am 26 year old", "i am from pakhtunistan"],
//         });
//     }, 3000);
// }

// function savedPostsNikalo(id, cb) {
//     console.log("Fetching saved posts...");
//     setTimeout(() => {
//         cb({
//             id: id,
//             savedPosts: ["post1", "post2", "post3"],
//         });
//     }, 4000);
// }

// profileLakarAao("ubaid", function(data) {
//     console.log(data);
//     saarePostLakarAao(data._id, function(posts) {
//         console.log(posts);
//         savedPostsNikalo(data._id, function(saved) {
//             console.log(saved);
//         })
//     });
// });

// Now promises is resolve and reject.
let newPromise = new Promise((res, rej) => {
    setTimeout(() => {
        let rn = Math.floor(Math.random() * 10);
        if (rn > 5) {
            res("resolved with" + rn);
        } else {
            rej("rejected with" + rn);
        }
    }, 3000);
});

newPromise.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});
