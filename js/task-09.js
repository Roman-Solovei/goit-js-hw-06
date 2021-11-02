
const btn = document.querySelector('.change-color');

btn.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  
  document.body.style.background = getRandomHexColor(); 

  document.querySelector('.color').innerHTML = document.body.style.background;

};