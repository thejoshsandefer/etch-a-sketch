const container = document.querySelector('#container');


//Create 16 <div> elements
for (i = 0; i < 16; i++) { 
    const createDiv = document.createElement('div');
    createDiv.classList.add('pixel');
    createDiv.style.cssText = 'background-color: #f2f2f2;  flex: 1 0 21%; height: 100px';
    container.appendChild(createDiv);
}

const pixel = document.querySelectorAll('.pixel')
body.addEventListener('click', event => {
    if (event.target !== pixel) {
      return
    }
    createDiv.style.cssText = 'background-color: red;';
});
// pixel.forEach(pixel => {
//     addEventListener('hover' , () => {
//         console.log('hover');
//     });
// });