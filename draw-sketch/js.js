let container = document.querySelector('#container');

let rows = 8;
let columns = 8;

function makeGrid(rows, columns){
    
    let size = rows*columns;
    //pass variable to CSS
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);

    for (let i = 0; i < size; i++){
        let c = document.createElement('div');
        c.classList.add('box');
        c.setAttribute('id', i);
        c.style.height = 550/columns+"px"
        c.style.width = 550/rows+"px";
        container.appendChild(c);
    }

    let boxes = document.querySelectorAll('.box');

    //draw
    boxes.forEach((x) => {
    x.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = `rgba(${Math.floor(Math.random()*512)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, 0.7)`;
        });
    });
    
    //reset drawing
    let reset = document.querySelector('#reset');

    reset.addEventListener('click', () => {
    
    boxes.forEach((e) =>{
    e.style.backgroundColor = 'transparent';
        });
    });    
}

//new grid
let newGrid = document.querySelector('#new-grid');

newGrid.addEventListener('click', () =>{
    let ask = prompt('How many squares per side do you want?');
    columns = ask;
    rows = ask;
    container.innerHTML = '';
    makeGrid(rows, columns);
});

makeGrid(rows, columns);


