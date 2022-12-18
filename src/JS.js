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

//

const newForm = document.createElement("div");

document.querySelector("html").append(newForm);

newForm.innerHTML = `<div>
<nav class="menu">
  <button type="button" >
   <span class="m-o">open</span>
   <span hidden class="m-c">close</span>
  </button> 
  <ul class="ul" hidden>
  <li>case 1</li>
  <li>case 2</li>
  <li>case 3</li>
  <li>case 4</li>
  </ul>
 </nav>
</div>
`;

const ul = document.querySelector(".ul");
const op = document.querySelector(".m-o");
const cl = document.querySelector(".m-c");

document.querySelector("html").addEventListener("click", (e) => {
  if (e.target.closest("body")) {
    ul.hidden = true;
    cl.hidden = true;
    op.hidden = false;
  }
});

op.addEventListener("click", () => {
  ul.hidden = false;
  op.hidden = true;
  cl.hidden = false;
});
cl.addEventListener("click", () => {
  ul.hidden = true;
  cl.hidden = true;
  op.hidden = false;
});

const menu = document.querySelector(".menu");
menu.style.cssText = `
color: #944567;
position: fixed;
top: 0;
left: 0;
padding: 10px;

`;
