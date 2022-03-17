let size = window.innerWidth / (2 * 9);
let position = {x: 0, y: 0};



displayGrid();
displaySprite();
manualGridMovement();
window.addEventListener('resize', changeSize)



function displayGrid() {
    const grid = document.createElement('div');
    grid.id = 'grid';
    document.querySelector('body').append(grid);



    let cellClass = 'greenTile';
    let isGreen = true;

    for(let i = 0; i < 9; i++) {
        const column = document.createElement('div');
        column.className = 'column';
        grid.append(column);

        for(let i = 0; i < 9; i++) {
            isGreen = !isGreen;
            (isGreen) ? cellClass = 'greenTile' : cellClass = 'lightGreenTile';
        
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = cellClass;
            cell.style.height = size + 'px';
            cell.style.width = size + 'px';
    
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
    
        sprite.style[windowAxis] = position[spriteAxis] + 'px';
    } 

    chooseDirection()
}

function changeSize() {
    size = window.innerWidth / (2 * 9);

    const grid = document.querySelector('#grid')
    grid.remove();

    displayGrid();
    displaySprite();
}

function displaySprite() {
    const sprite = document.createElement('div');
    sprite.id = 'sprite';
    document.querySelector('#grid').append(sprite);

    sprite.style.left = position.x + 'px';
    sprite.style.bottom = position.y + 'px';

    sprite.style.height = size + 'px';
    sprite.style.width = size + 'px';
}