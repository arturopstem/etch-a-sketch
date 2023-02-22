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
      e.target.style.setProperty("background-color", "black");
    });
  });
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
