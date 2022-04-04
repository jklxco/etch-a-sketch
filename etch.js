function createGrid(gridSize) {

    const container = document.querySelector("#grid-container");
    clearGrid(container);

    for (i = 1; i <= gridSize; i++ ) {
        let divCol = document.createElement("div");
        divCol.classList.add("box-col");
        for (j = 1; j <= gridSize; j++ ) {
            let divRow = document.createElement("div");
            divRow.classList.add("box");
            //divRow.textContent = `${i}-${j}`;
            divRow.addEventListener("mouseenter", function() {
                divRow.classList.add("hovered")
            });
            divCol.appendChild(divRow);
        };
        container.appendChild(divCol);
    };
}

function refreshGrid() {
    let usedSquares = document.querySelectorAll(".hovered");
    usedSquares.forEach( e => e.classList.remove("hovered") );
    gridSize = parseInt(prompt("Enter a size for the new grid: (Max: 100) ", 16));
    //let gridSize = (gridSize > 100) ? 100 : gridSize; 
    createGrid(gridSize);
}

function clearGrid(container) {
    let clearSquares = document.querySelectorAll(".box-col");
    clearSquares.forEach(e => container.removeChild(e));
}

createGrid(16);

const newGrid = document.querySelector('#new-grid');

newGrid.addEventListener("click", refreshGrid);

