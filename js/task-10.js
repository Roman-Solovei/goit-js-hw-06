
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const create = document.querySelector('[data-create]');

const destroy = document.querySelector('[data-destroy]');

const boxes = document.querySelector('#boxes');

create.addEventListener('click', getAmount);
destroy.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = document.querySelector('#controls input').value;  
   createBoxes(amount);
}

function createBoxes(amount) {
  const boxSize = 30;
  const element = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const size = boxSize + i * 10;
    const div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    element.appendChild(div);
  }
  boxes.appendChild(element);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
