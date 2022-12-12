function createBombs(min, max)
{
    let bombs = [];

    let i = 0;

    while(i < 16)
    {
        let number = Math.floor(Math.random() * (max - min + 1)) + min;

        if(!bombs.includes(number)){
            bombs.push(number);
            i++;
        }
    }
    
    return bombs;
}

function createNewGame(){
    let difficulty = parseInt(document.getElementById('level').value);
    
    let arrayBombs = [];

    let cellsNumber;
    let cellsPerRow;

    switch(difficulty){
        case 1:
            cellsNumber = 100;
            cellsPerRow = 10;
            break;
        case 2:
            cellsNumber = 81;
            cellsPerRow = 9;
            break;
        case 3:
            cellsNumber = 49;
            cellsPerRow = 7;
            break;
        default:
            cellsNumber = 100;
            cellsPerRow = 10;
            break;
    }

    arrayBombs= createBombs(1, cellsNumber);
    console.log(arrayBombs);

    generateGameGrid(arrayBombs, cellsNumber, cellsPerRow);

}


function generateGameGrid(bombs_array, cellsNumber, cellsPerRow)
{
    document.querySelector('.container').innerHTML = '';

    const grid = document.createElement('div');

    grid.classList.add('grid');

    const grid_side = cellsPerRow * 100;

    grid.style.width = `${grid_side}px`;
    grid.style.height = `${grid_side}px`;

    let empty = 0;

    for(let i = 0; i < cellsNumber; i++){
        const cell = createSingleCell(i+1, cellsPerRow);
        cell.addEventListener ('click', function(){
            this.classList.toggle('clicked');
            if(bombs_array.includes(parseInt(this.innerText)))
            {
                this.classList.add('bomb');
                grid.classList.add('block');
                alert('Oh no, una bomba: Hai perso!');
                alert('Buche scavate ='+ empty);
            }
            else{
                empty++;
            }
        })

        grid.appendChild(cell);
    }

    document.querySelector('.container').appendChild(grid);
    
}


    document.getElementById('play-game').addEventListener('click', function(){
    createNewGame();
})


function createSingleCell(num, cells_per_row)
{
    const cell = document.createElement('div');

    cell.classList.add('square');

    let sideLenght = '100px';

    cell.style.width = sideLenght;
    cell.style.height = sideLenght;

    cell.innerText = num;

    return cell;
}





