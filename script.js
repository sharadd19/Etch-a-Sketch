let board = document.querySelector('.board');
let squaresPerSide = 16;
let boardSize = 960;
let button = document.querySelector('.numberOfSquares');
const numOfSquares = squaresPerSide * squaresPerSide;

button.addEventListener('click', () => {
    let gridNumber = prompt('How many squares do you want to create a new grid with?');
    let gridSize = parseInt(gridNumber);
    
    // We want to make sure the user's input is a number and is less than or equal to 100.
    while ((isNaN(gridSize)) || (gridSize > 100)) {
        gridNumber = prompt('Value is either not a number or is greater than 100. Enter a number less than or equal to 100.');
        gridSize = parseInt(gridNumber);
    };
    let numOfSquares = gridSize * gridSize;
    console.log(numOfSquares);
    removeGrid();
    createGrid(numOfSquares);
})

createGrid = (numOfSquares) => {
    for (let i = 0; i< numOfSquares; i++) {
        const div = document.createElement('div');
        div.style.width = div.style.height = `${(boardSize/Math.sqrt(numOfSquares))}px`;
        div.style.backgroundColor = 'white';
        div.classList.add("cell");
        board.appendChild(div);

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'red';
        })    
    };
}

// Removing the cells one by one until there are none left
removeGrid = () => {
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}

createGrid(numOfSquares);
