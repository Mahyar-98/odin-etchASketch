const resetBtn = document.querySelector(".reset-btn");
const body = document.querySelector("body");
const newGrid = document.createElement("div");
let divs = null;
body.appendChild(newGrid);
makeGrid(16);

resetBtn.addEventListener("click", e => {
  let askDimension = prompt("Please enter the dimension of your grid (max 100).")
  if (askDimension > 0 && askDimension <= 100) {
    makeGrid(askDimension)
  }
})


function makeGrid(size) {
  oldGrid = document.querySelector("body > div");
  oldGrid.innerHTML = null;
  body.removeChild(oldGrid);
  body.appendChild(newGrid);
  for (let i = 0; i < size; i++) {
    newGrid.appendChild(document.createElement("div"));
    for (let j = 0; j < size; j++) {
      newGrid.lastChild.appendChild(document.createElement("div"));
    }
  }
  divs = newGrid.querySelectorAll("body > div > div > div");
  eventListen()
}


function eventListen() {
  divs.forEach(div => {
    div.addEventListener("mouseover", e => e.target.classList.toggle("div-active")); 
    div.addEventListener("mouseout", e => e.target.classList.toggle("div-active"));  
  });
}
