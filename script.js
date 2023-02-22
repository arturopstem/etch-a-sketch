function createGrid(numberOfRows) {
  for (let i = 0; i < numberOfRows; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    createCells(row, numberOfRows);
    grid.appendChild(row);
  }
}

function createCells(row, numberOfCells) {
  for (let j = 0; j < numberOfCells; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    row.appendChild(cell);
  }
}

function addHoveringEffect() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      let color = getColor(e.target);
      e.target.style.setProperty("background-color", color);
    });
  });
}

function getColor(cell) {
  const cellColor = cell.style.getPropertyValue("background-color");
  if (!cellColor) {
    return newRandomColor(cell);
  } else {
    return darkenColor(cell);
  }
}

function newRandomColor(cell) {
  const hue = Math.floor(Math.random() * 360);
  cell.style.setProperty("--hue", hue);
  cell.style.setProperty("--saturation", 100);
  cell.style.setProperty("--lightness", 50);
  return `hsl(${hue}, 100%, 50%)`;
}

function darkenColor(cell) {
  const hue = cell.style.getPropertyValue("--hue");
  let lightness = cell.style.getPropertyValue("--lightness");
  if (lightness === 0) return;
  lightness -= 5;
  cell.style.setProperty("--lightness", lightness);
  return `hsl(${hue}, 100%, ${lightness}%)`;
}

function newGrid() {
  let newSquaresPerSide = prompt(
    "Number of squares per side: ",
    squaresPerSide
  );
  if (newSquaresPerSide && parseInt(newSquaresPerSide) <= 100) {
    squaresPerSide = parseInt(newSquaresPerSide);
    grid.innerHTML = "";
    createGrid(squaresPerSide);
    addHoveringEffect();
  }
}

const newGridButton = document.querySelector("#newGridButton");
const grid = document.querySelector(".grid");
let squaresPerSide = 16;

createGrid(squaresPerSide);
addHoveringEffect();
newGridButton.addEventListener("click", newGrid);
