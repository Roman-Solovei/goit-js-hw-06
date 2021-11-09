let inputText = document.querySelector('#validation-input');

let inputLength = Number(inputText.getAttribute('data-length'));

const input = document.querySelector('input');

function classAddRemove(add, remove) {
    inputText.classList.add(add);
    inputText.classList.remove(remove);
}

inputText.addEventListener('blur', () => {
  const text = inputText.value;

    if (inputLength !== text.length) {       
        classAddRemove('invalid', 'valid');
    } 
    if (inputLength === text.length)
    {      
        classAddRemove('valid','invalid');
    }
    if (text.length === 0)
    {        
        inputText.classList.remove('valid');
        inputText.classList.remove('invalid');
    }  
});
