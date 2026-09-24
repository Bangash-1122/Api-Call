const body = document.body;
const themeBtn = document.getElementById("toggleTheme");
const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");

const applyTheme = (theme) => {
    body.classList.remove("dark", "light");
    body.classList.add(theme);
};


const getSystemTheme = () =>
    themeQuery.matches ? "dark" : "light";


// Load saved theme or system preference
const savedTheme = localStorage.getItem("theme");

applyTheme(savedTheme || getSystemTheme());


// Change theme button
if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        const newTheme = body.classList.contains("dark") ?
            "light" :
            "dark";

        applyTheme(newTheme);

        localStorage.setItem("theme", newTheme);
    });
}


// Follow system theme changes if user has not selected manually
themeQuery.addEventListener("change", () => {

    if (!localStorage.getItem("theme")) {

        applyTheme(getSystemTheme());

    }

});