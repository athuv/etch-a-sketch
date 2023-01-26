let gridContainer = document.getElementById('grid-container');
let rangeGrid = document.getElementById('grid-range');

generateGrids(50); //50x50 grid set as default
colorGrid();

rangeGrid.addEventListener('input',function(){
    const grid = this.value;
    gridContainer.innerHTML = '';
    //console.log(this.previousElementSibling);
    this.previousElementSibling.innerText = `${grid}x${grid}`;
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
    this.style.backgroundColor = 'red';
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

