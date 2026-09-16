// Dom manipulation
// html se element select karna 
// text badalna 
// css badalna
// event listeners


// const heading = document.getElementById('heading');
// console.dir(heading);
// const headings = document.getElementsByClassName('heading');
// console.dir(headings);
// const headings = document.querySelector('h1');
// console.dir(headings);

// const headings = document.querySelectorAll("h1")
// console.dir(headings);

// let li = document.querySelectorAll("ul li:nth-child(2n)");
// console.dir(li)

// li.forEach(function(element) {
//     element.classList.add('highlight')
// });

// let p = document.querySelectorAll("p");
// p.forEach(function(element) {
//     element.style.fontSize = "20px";
// })




// borwser mein page par koi bhi harkat karo event listener kehte hain 
// mouse se click karna 
// keyboard se kuch likhna 
// mouse se scroll karna 
// mouse se move karna 
// button par click karna 
// link par click karna 
// form fill karna 
// video play karna 
// audio play karna 

// let p = document.querySelector("p");
// p.addEventListener("click", function() {
//     p.style.color = "green";
// });

// let p = document.querySelector("p")
// p.addEventListener("dblclick", function() {
//     p.style.color = "green";
// });


// Element.addEventListener("eventName", function() {

// })

// let p = document.querySelector("p");

// function dblclick() {
//     p.style.backgroundColor = "yellow"
// }
// p.addEventListener("dblclick", dblclick);
// p.removeEventListener("dblclick", dblclick);

// let input = document.querySelector("input")
// input.addEventListener("input", function(data) {
//     console.log(data.key);
// })

// let inp = document.querySelector("input");
// inp.addEventListener("input", function(dets) {
//     if (dets.data !== null) {
//         console.log(dets.data);
//     }
// })

// let sel = document.querySelector("select")
// let device = document.querySelector("#device")

// sel.addEventListener("change", function(detils) {
//     device.textContent = `${detils.target.value} Device Selected`;
// });

// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", function(details) {
//     if (details.key === ' ') {
//         h1.textContent = 'space'
//     } else {
//         h1.textContent = details.key;
//     }

// })

// let btn = document.querySelector("#btn");
// let file = document.querySelector("#fileinp");

// btn.addEventListener("click", function() {
//     fileinp.click();
// });

// fileinp.addEventListener("change", function(dets) {
//     if (dets.target.files) {
//         btn.textContent = dets.target.files[0].name;
//     }
// })

let form = document.querySelector("#form");
let input = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", function(dets) {
    dets.preventDefault();
    let card = document.createElement('div');
    card.classList.add('card');

    let profile = document.createElement("div");
    profile.classList.add("profile");
    card.appendChild(profile);


    let img = document.createElement("img");
    img.setAttribute("src", dets.target[3].value);

    let h3 = document.createElement('h3');
    h3.textContent = dets.target[0].value;
    let h5 = document.createElement('h5');
    h5.textContent = dets.target[1].value;
    let p = document.createElement('p');
    p.textContent = dets.target[2].value;

    profile.appendChild(img);
    profile.appendChild(h3);
    profile.appendChild(h5);
    profile.appendChild(p);
    main.appendChild(card);


    input.forEach(function(element) {
        if (element.type !== "submit") {
            element.value = "";
        }
    });
});