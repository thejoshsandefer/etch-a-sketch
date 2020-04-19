const container = document.querySelector('#container');

//populate a grid on page load
for (i = 0; i < Math.pow(16, 2); i++) { 
  const createDiv = document.createElement('div');
  createDiv.classList.add('pixel');
  let maxWidth = 960 / 16;
  createDiv.style.cssText = 'width: ' + maxWidth + 'px';
  container.appendChild(createDiv);
}

//Create <div> elements
function initializeCreateGrid() {
  let gridSize = prompt('Choose a gride size...', '1-64')
  createGrid(gridSize);
}

function createGrid(gridSize) {
  for (i = 0; i < Math.pow(gridSize, 2); i++) { 
      const createDiv = document.createElement('div');
      createDiv.classList.add('pixel');
      let maxWidth = 960 / gridSize;
      createDiv.style.cssText = 'width: ' + maxWidth + 'px';
      container.appendChild(createDiv);
  }
}

//Mouseover event listener
document.addEventListener('mouseover', function(e) {
  if (e.target.classList.contains('pixel')) {
    e.target.classList.add('highlighted');
  }
})

//Get new grid event
const btn = document.querySelector('#btn');
btn.addEventListener('click', function(e) {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  initializeCreateGrid();
})