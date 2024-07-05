document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    
    if (container) {
        console.log('Container found:', container);
    } else {
        console.error('Container not found');
    }

    function createGrid(size) {
        for(let i=0; i < size * size; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            container.appendChild(cell);
        }
    }

    function enableDrawing() {
        const cells= document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'pink';
            });
        });
    }

    createGrid(16);
    enableDrawing();
});
