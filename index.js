// the size of the sprite and grid cells (vmin units)
const size = 9;
// dimensions of the n x n grid, (only works with odd numbers)
const gridSize = 9;
// initializes sprite position at the center of the grid
let position = {
    x: (gridSize - 1) * size / 2, 
    y: (gridSize - 1) * size / 2
};

const bounds = {
    min: 0,
    max: (gridSize - 1) * size
}



onStart();

function onStart() {
    displayGrid();
    displaySprite();
    document.addEventListener('keydown', (event) => chooseDirection(event));
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

function chooseDirection(event) {
    switch(event.key) {
        case 'ArrowRight':
            isAtBorder('x', 'max') ? null : move('x', 'left', true);
            break;
        case 'ArrowLeft':
            isAtBorder('x', 'min') ? null : move('x', 'left', false);
            break;
        case 'ArrowUp':
            isAtBorder('y', 'max') ? null : move('y', 'bottom', true);
            break;
        case 'ArrowDown':
            isAtBorder('y', 'min') ? null : move('y', 'bottom', false);
            break;
    }
}

function isAtBorder(axis, boundary) {
    return (position[axis] === bounds[boundary]) ? true : false;
}

function move(spriteAxis, windowAxis, moveMaxy) {
    (moveMaxy === true) 
    ? position[spriteAxis] += size
    : position[spriteAxis] -= size;

    sprite.style[windowAxis] = position[spriteAxis] + 'vmin';
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