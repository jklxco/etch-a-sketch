function createGrid(gridSize) {

    const container = document.querySelector("#grid-container");
    clearGrid(container);

    for (i = 1; i <= (gridSize*gridSize); i++ ) {
        let div = document.createElement("div");
        div.classList.add("box");
        div.addEventListener("mouseenter", function() {
            div.classList.add("hovered")
        });
        container.appendChild(div);
    };
    container.style["grid-template-columns"] = `repeat(${gridSize}, 1fr)`;
}

function refreshGrid() {
    let usedSquares = document.querySelectorAll(".hovered");
    usedSquares.forEach( e => e.classList.remove("hovered") );
    let gridSize = parseInt(prompt("Enter a size for the new grid: (Max: 100) ", 16));
    if (gridSize > 100 ) gridSize = 100;
    createGrid(gridSize);
}

function clearGrid(container) {
    let clearSquares = document.querySelectorAll(".box");
    clearSquares.forEach(e => container.removeChild(e));
}

createGrid(16);

const newGrid = document.querySelector('#new-grid');

newGrid.addEventListener("click", refreshGrid);

