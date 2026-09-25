// new cards create karne hai, data local storage mein save karna hai 
// local storage se he cards ko show karna hai
//Buttons ko handle karna ha
// filters ko handle karna hai


const cardContainer = document.querySelector("#cardContainer");
const addBtn = document.querySelector("#addBtn");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");

const colorButtons = document.querySelectorAll(".color-btn");

const callModal = document.querySelector("#callModal");
const callForm = document.querySelector("#callForm");

const closeBtn = document.querySelector("#closeBtn");
const createBtn = document.querySelector("#createBtn");

addBtn.addEventListener("click", () => {
    callModal.style.display = "initial";
});
closeBtn.addEventListener("click", () => {
    callModal.style.display = "none";
});
