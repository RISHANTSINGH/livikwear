//let header = document.querySelector(".header");
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
//let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if (navbar.classList.contains("showInput")) {
        searchBox.classList.replace("bx-search", "bx-x");
    } else {
        searchBox.classList.replace("bx-x", "bx-search");
    }
});


//const body = document.querySelector("body"),
//    modeToggle = document.querySelector("#moonSun");
//let getMode = localStorage.getItem("mode");
//if (getMode && getMode === "dark-mode") {
//    body.classList.add("dark");
//}
//
//
//// js code to toggle dark and light mode
//modeToggle.addEventListener("click", () => {
//    modeToggle.classList.toggle("active");
//    body.classList.toggle("dark");
//
//    // js code to keep user selected mode even page refresh or file reopen
//    if (!body.classList.contains("dark")) {
//        localStorage.setItem("mode", "light-mode");
//    } else {
//        localStorage.setItem("mode", "dark-mode");
//    }
//});
