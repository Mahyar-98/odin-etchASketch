const body = document.querySelector("body");
const mainDiv = document.createElement("div");
body.appendChild(mainDiv)
for (let i = 0; i < 16; i++) {
  mainDiv.appendChild(document.createElement("div"));
  for (let j = 0; j < 16; j++) {
    mainDiv.lastChild.appendChild(document.createElement("div"));
  }
}
