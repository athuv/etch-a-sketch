let gridContainer = document.getElementById('grid-container');
let rangeGrid = document.getElementById('grid-range');

generateGrids(50); //50x50 grid set as default
colorGrid();

rangeGrid.addEventListener('input',function(){
    const grid = this.value;
    gridContainer.innerHTML = '';
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
    let r, g, b;

    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);

    if(this.style.backgroundColor == ""){
        this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;  
        this.style.filter = 'brightness(100%)';      
    }else{
        const currentBrightness = this.style.filter.replace(/\D/g, "");
       
        if(currentBrightness > 0){
            const newBrightness = currentBrightness - 10;
            this.style.filter = `brightness(${newBrightness}%)`;
        }
        
    }
    
    
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

