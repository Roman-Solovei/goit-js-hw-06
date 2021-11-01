
let inputName = document.querySelector('#name-input');

let outputName = document.querySelector('#name-output');

const outName = () => {     
    inputName.value === '' ? outputName.innerHTML = 'Anonymous' : outputName.innerHTML = inputName.value;    
};

inputName.addEventListener('input', outName);

