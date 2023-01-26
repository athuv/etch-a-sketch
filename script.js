let gridContainer = document.getElementById('grid-container');
let btnGrid = document.getElementById('btn-grid');

generateGrids(50); //50x50 grid set as default
colorGrid();

btnGrid.addEventListener('click',function(){
    const grid = prompt('value?');
    gridContainer.innerHTML = '';
    generateGrids(grid);
    colorGrid();
});

function colorGrid(){
    let gridRows = document.querySelectorAll('.grid-row');
    gridRows.forEach(function(rows) {    
        rows.addEventListener("mouseover", changeColor);
    });
}

function changeColor(){
    this.style.backgroundColor = 'green';
}

function generateGrids(grids){
    for (let i = 0;i < grids;i++ ){ //Creating columns
        const columns = document.createElement('div');
        columns.className = 'grid-column';
        gridContainer.appendChild(columns);
        for(var j = 0; j < grids; ++j){ // creating rows
            const rows  = document.createElement('div');
            rows.className = 'grid-row';
            columns.appendChild(rows);
        }
    }
}

