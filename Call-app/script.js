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

// Input Fields
const imageUrl = document.querySelector("#imageUrl");
const fullName = document.querySelector("#fullName");
const homeTown = document.querySelector("#homeTown");
const purpose = document.querySelector("#purpose");

// Categories
const categoryCheckboxes = document.querySelectorAll(
    'input[name="category"]'
);

// ========================================
// SAVE TO LOCAL STORAGE
// ========================================

function saveToLocalStorage(obj) {
    const oldTasks =
        JSON.parse(localStorage.getItem("tasks")) || [];
    oldTasks.push(obj);
    localStorage.setItem(
        "tasks",
        JSON.stringify(oldTasks)
    );
};

// ========================================
// CREATE CARD
// ========================================

function createCard(task) {
    // Article
    const callCard = document.createElement("article");
    callCard.classList.add("call-card");

    // ========================================
    // Card Header
    // ========================================

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    const avatar = document.createElement("img");
    avatar.classList.add("avatar");
    avatar.src = task.imageUrl;
    avatar.alt = task.fullName;
    cardHeader.appendChild(avatar);

    // ========================================
    // Card Info
    // ========================================

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    // Name
    const name = document.createElement("h2");
    name.textContent = task.fullName;

    // Home Town Row
    const homeTownRow = document.createElement("div");
    homeTownRow.classList.add("info-row");

    const homeTownLabel = document.createElement("span");
    homeTownLabel.textContent = "Home town";

    const homeTownValue = document.createElement("span");
    homeTownValue.textContent = task.homeTown;

    homeTownRow.append(
        homeTownLabel,
        homeTownValue
    );

    // Bookings Row
    const bookingsRow = document.createElement("div");
    bookingsRow.classList.add("info-row");

    const bookingsLabel = document.createElement("span");
    bookingsLabel.textContent = "Bookings";

    const bookingsValue = document.createElement("span");
    bookingsValue.textContent = "0 times";

    bookingsRow.append(
        bookingsLabel,
        bookingsValue
    );

    // Add information
    cardInfo.append(
        name,
        homeTownRow,
        bookingsRow
    );

    // ========================================
    // Card Actions
    // ========================================

    const cardActions = document.createElement("div");
    cardActions.classList.add("card-actions");

    // Call Button
    const callBtn = document.createElement("button");
    callBtn.type = "button";
    callBtn.classList.add(
        "card-btn",
        "call-btn"
    );

    const callIcon = document.createElement("span");
    callIcon.textContent = "☎";

    callBtn.append(
        callIcon,
        " Call"
    );

    // Message Button
    const messageBtn = document.createElement("button");

    messageBtn.type = "button";
    messageBtn.classList.add(
        "card-btn",
        "message-btn"
    );

    messageBtn.textContent = "Message";

    cardActions.append(
        callBtn,
        messageBtn
    );

    // ========================================
    // Complete Card
    // ========================================

    callCard.append(
        cardHeader,
        cardInfo,
        cardActions
    );
    // Add card inside container
    cardContainer.appendChild(callCard);
}

// ========================================
// OPEN MODAL
// ========================================

addBtn.addEventListener("click", function() {
    callModal.classList.add("is-open");
});

// ========================================
// CLOSE MODAL
// ========================================

closeBtn.addEventListener("click", function() {
    callModal.classList.remove("is-open");
});

// ========================================
// FORM SUBMIT
// ========================================

callForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get categories
    const selectedCategories = [...categoryCheckboxes]
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);

    // Create Object
    const task = {
        imageUrl: imageUrl.value.trim(),
        fullName: fullName.value.trim(),
        homeTown: homeTown.value.trim(),
        purpose: purpose.value.trim(),
        selectedCategories: selectedCategories,
        bookings: 0
    };

    saveToLocalStorage(task);
    createCard(task);
    callForm.reset();
    callModal.classList.remove("is-open");
});

// ========================================
// LOAD SAVED CARDS
// ========================================

function loadCards() {
    const tasks =
        JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(function(task) {
        createCard(task);
    });
}


// Run when page loads
loadCards();



upBtn.addEventListener("click", function() {
    const lastChild = cardContainer.lastElementChild;
    if (lastChild) {
        cardContainer.insertBefore(lastChild, cardContainer.firstElementChild);
        //update
        updateCardContainer();
    }
});

downBtn.addEventListener("click", function() {
    const firstChild = cardContainer.firstElementChild;
    if (firstChild) {
        cardContainer.appendChild(firstChild);
        //update 
        updateCardContainer();
    }
});


function updateCardContainer() {
    const cards = document.querySelectorAll(".cardContaier .card");

    cards.forEach(function(card, index) {
        card.style.zIndex = 3 - index;
        card.style.transform = `translateY(${index * 10}px) scale(${0.9 - index * 0.05})`;
        card.style.opacity = `${1 - index * 0.2}`;
    });
}

updateCardContainer();
