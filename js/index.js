// Your code goes here
let nav_links = document.querySelectorAll(".nav-link");
nav_links.forEach(element => {
    element.addEventListener("mouseover", function (event) {
        this["style"]["color"] = "lightgray";
    });
    element.addEventListener("mouseout", function (event) {
        element.removeAttribute("style");
    });
})

let logo_heading = document.querySelector(".logo-heading");
logo_heading.addEventListener("click", function (event) {
    this["style"]["color"] = "red";
});

logo_heading.addEventListener("dblclick", function (event) {
    this["style"]["color"] = "blue";
});