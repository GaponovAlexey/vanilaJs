const b1 = "<button class='js-button'>green</button>";
const b3 = "<button class='js-button'>red</button button>";
const b2 = "<button class='js-button'>yellow</button>";
const b4 = "<button class='js-button'>pink</button>";

const b = document.querySelector(".js-button");
const el = document.querySelectorAll(".js-button");
// const b1e = document.querySelector(".js-b")
// b.add(b1) = b1;
b.children.innerHTML += b1 + b2 + b3 + b4;
console.log(b);

// ba["red"].addEventListener("click", (e) => {
//   console.log("yellow", )

// })
