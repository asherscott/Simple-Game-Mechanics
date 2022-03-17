const sprite = document.querySelector('#sprite');
const size = 20;
const position = {x: 0, y: size * 4};

sprite.style.left = position.x + 'px';
sprite.style.bottom = position.y + 'px';

sprite.style.height = size + 'px';
sprite.style.width = size + 'px';



displayGrid();
manualGridMovement();



function displayGrid() {
    let cellId = 'greenTile';
    let counter = 0;

    for(let i = 0; i < 9; i++) {
        const column = document.createElement('div');
        column.className = 'column';
        document.querySelector('#grid').append(column);

        for(let i = 0; i < 9; i++) {
            counter++;
            (counter % 2 === 0) ? cellId = 'greenTile' : cellId = 'lightGreenTile';
        
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = cellId;
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