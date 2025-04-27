let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("body");

console.log(body);

function color_change () {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";


    css.textContent = "Left color HEX - " + color1.value + " | " + "Right color HEX - " + color2.value
}

color1.addEventListener("input", color_change);

color2.addEventListener("input", color_change);