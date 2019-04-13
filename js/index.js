// Your code goes here
let nav_links = document.querySelectorAll(".nav-link");
nav_links.forEach(element => {
    element.addEventListener("mouseover", function (event) {
        this["style"]["color"] = "lightgray";
    });
    element.addEventListener("mouseout", function (event) {
        this["style"]["color"] = "";
    });
})

let logo_headings = document.querySelector(".logo-heading");
logo_heading.addEventListener("click", function (event) {
    this["style"]["color"] = "red";
});