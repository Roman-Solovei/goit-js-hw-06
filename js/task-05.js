
let inputName = document.querySelector('#name-input');

inputName.addEventListener('input', outName);

let outputName = document.querySelector('#name-output');


function outName () {     
    inputName.value === '' ? outputName.innerHTML = 'Anonymous' : outputName.innerHTML = inputName.value;    
};



