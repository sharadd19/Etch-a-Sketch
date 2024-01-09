const board = document.querySelector('.board');
// const button = document.getElementById('popup');
// console.log(grid);

// promptMessage = (tryAgain) => {
//     let gridSize;
//     let gridNumber;

//     if (tryAgain === "big")
//     {
//         gridNumber = prompt('Value too big. Select a number up to 100.');
//         gridSize = parseInt(gridNumber);
//     }
//     else if (tryAgain === "nan") {
//         gridNumber = prompt('Value not a number. Enter a number.');
//         gridSize = parseInt(gridNumber);
//     }

//     gridNumber = prompt('How many squares do you want to create a new grid with?');
//     gridSize = parseInt(gridNumber);
    
//     return gridSize;
// }

// button.addEventListener('click', () => {
//     // Set max value to enter as 100.
//     // let gridNumber = prompt('How many squares do you want to create a new grid with?');
//     // console.log(gridNumber);
//     // let gridSize = parseInt(gridNumber);
//     const message = promptMessage();
//     console.log(message);
//     if (message > 100) {
//         promptMessage(tryAgain="big");
//     }
//     else if (isNaN(message)) {
//         promptMessage(tryAgain="nan");
//     }
// })

createGrid = () => {

    for (let i = 1; i< 257; i++) {
        const div = document.createElement('div');
    
        div.style.backgroundColor = 'black';

        // div.addEventListener('mouseover', () => {
        //     console.log(event);
        //     div.style.backgroundColor = 'red';
        // })    
        board.appendChild(div);
    };
}


createGrid();
