// the size of the sprite and grid cells (vmin units)
const size = 9;
// dimensions of the n x n grid, (only works with odd numbers)
const gridSize = 9;
// initializes sprite position at the center of the grid
let position = {
    x: (gridSize - 1) * size / 2, 
    y: (gridSize - 1) * size / 2
};



onStart()



function onStart() {
    displayGrid();
    displaySprite();
    manualGridMovement();
    window.addEventListener('resize', changeSize)
}

function displayGrid() {
    const grid = document.createElement('div');
    grid.id = 'grid';
    document.querySelector('body').append(grid);



    let cellClass = 'darkerTile';
    let isDark = true;

    for(let i = 0; i < gridSize; i++) {
        const column = document.createElement('div');
        column.className = 'column';
        grid.append(column);

        for(let i = 0; i < gridSize; i++) {
            (isDark) ? cellClass = 'darkerTile' : cellClass = 'lighterTile';
            isDark = !isDark;
        
            const cell = document.createElement('div');
            cell.className = cellClass;
            cell.style.height = size + 'vmin';
            cell.style.width = size + 'vmin';
    
            column.append(cell);
        }
    }
}

function manualGridMovement() {
    function chooseDirection() {
        document.addEventListener('keydown', (event) => {
            switch(event.key) {
                case 'ArrowRight':
                    move('x', 'left', true)
                    break;
                case 'ArrowLeft':
                    move('x', 'left', false)
                    break;
                case 'ArrowUp':
                    move('y', 'bottom', true)
                    break;
                case 'ArrowDown':
                    move('y', 'bottom', false)
                    break;
            }
        })
    }
    
    function move(spriteAxis, windowAxis, moveMaxy) {
        (moveMaxy === true) 
        ? position[spriteAxis] += size
        : position[spriteAxis] -= size;
    
        sprite.style[windowAxis] = position[spriteAxis] + 'vmin';
    } 

    chooseDirection()
}

function changeSize() {
    document.querySelector('#grid').remove();

    displayGrid();
    displaySprite();
}

function displaySprite() {
    const sprite = document.createElement('div');
    sprite.id = 'sprite';
    document.querySelector('#grid').append(sprite);

    sprite.style.height = size + 'vmin';
    sprite.style.width  = size + 'vmin';
    sprite.style.left   = position.x + 'vmin';
    sprite.style.bottom = position.y + 'vmin';
}