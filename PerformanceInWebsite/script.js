/ Debouncing ->  app koi action kar rahe ho and app ye nhi chaahte har action pe kuch ho,
// jab bhi mare actions ke beech mein koi specific gap ajaye to ...

function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}
const input = document.querySelector('input');
input.addEventListener("input", debounce(() => {
    console.log(input.value);
}, 1000));



// throttle -> interval par chalunga, action agar hota raha and apne ek interval bataya utne
// interval me 1 baar hi chalunga, isse jyada baar nhi

function throttle(fn, delay) {
    let timer = 0;
    return function(...args) {
        let now = Date.now();
        if (now - timer > delay) {
            timer = now;
            fn.apply(this, args);
        }
    };
}

input.addEventListener("input", throttle(() => {
    console.log(input.value);
}, 1000));


// lazy loading 

let img = document.querySelectorAll("img");

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add("loaded")
            observer.unobserve(img)
        }
    });
}, {
    threshold: 0.1
});

img.forEach(img => observer.observe(img));


// import the heavy.js when btn is clicked here 
// i.e after the initial load of the website
const btn = document.querySelector("#btn");


btn.addEventListener("click", async function() {
    let heavy = await import('./heavy.js');
    heavy.veryHeavy();
});
// // //
const ul = document.querySelector('ul');

const space = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
    const li = document.createElement("li");
    li.textContent = "Item" + i;
    space.appendChild(li);
}

ul.appendChild(space);
