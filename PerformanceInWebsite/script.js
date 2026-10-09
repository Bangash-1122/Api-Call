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
