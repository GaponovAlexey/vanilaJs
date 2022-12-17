const b1 = "<button class='js-button'>green</button>";
const b3 = "<button class='js-button'>red</button button>";
const b2 = "<button class='js-button'>yellow</button>";
const b4 = "<button class='js-button'>pink</button>";

const f = document.querySelector(".js-first");
const b = document.querySelector(".js-buttons");
b.innerHTML += b1 + b2 + b3 + b4;

const el = document.querySelectorAll(".js-buttons");
const s = el[0].querySelectorAll("button");

s[0].addEventListener("click", () => (f.style.background = "#377755"));
s[1].addEventListener("click", () => (f.style.background = "#366655"));
s[2].addEventListener("click", () => (f.style.background = "#355555"));
s[3].addEventListener("click", () => (f.style.background = "#344455"));
