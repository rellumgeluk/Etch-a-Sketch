document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const newGridButton = document.getElementById('newGridButton');
    const containerSize = 720;
    if (container) {
        console.log('Container found:', container);
    } else {
        console.error('Container not found');
    }

    function createGrid(size) {
        container.style.width = `${containerSize}px`;
        container.style.height = `${containerSize}px`;
        container.innerHTML = '';

        for(let i=0; i < size * size; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            container.appendChild(cell);
        }

        const cellSize = containerSize / size;
        document.querySelectorAll('.cell').forEach(cell => {
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
        });

        enableDrawing();
    }

    function enableDrawing() {
        const cells= document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'pink';
            });
        });
    }

    function promptNewGrid() {
        let size = prompt('Enter the number of squares per side for the new grid (1-100 but 16 is recommended):');
        
        if (size !== null) {
            size = parseInt(size);
            if (size > 0 && size <= 100) {
                createGrid(size);
            } else {
                alert('Please enter a valid number between 1 and 100.');
            }
        }
    }

    newGridButton.addEventListener('click', promptNewGrid);

    createGrid(16);
});