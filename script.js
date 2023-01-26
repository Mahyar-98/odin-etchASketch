const body = document.querySelector("body");
const mainDiv = document.createElement("div");
body.appendChild(mainDiv)
for (let i = 0; i < 16; i++) {
  mainDiv.appendChild(document.createElement("div"));
  for (let j = 0; j < 16; j++) {
    mainDiv.lastChild.appendChild(document.createElement("div"));
  }
}

const divs = mainDiv.querySelectorAll("body > div > div > div");
console.log(divs)

divs.forEach(div => {
  div.addEventListener("mouseover", e => e.target.classList.toggle("div-active")); 
  div.addEventListener("mouseout", e => e.target.classList.toggle("div-active"));  
});