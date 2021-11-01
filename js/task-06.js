

let inputText = document.querySelector('#validation-input');


let inputLength = Number(inputText.getAttribute('data-length'));


const input = document.querySelector('input');


inputText.addEventListener('blur', () => {
  const text = inputText.value;

    if (inputLength !== text.length) {
        inputText.classList.add('invalid');
        inputText.classList.remove('valid');
    } 
    if (inputLength === text.length)
    {        
        inputText.classList.add('valid');
        inputText.classList.remove('invalid');
    }
    if (text.length === 0)
    {        
        inputText.classList.remove('valid');
        inputText.classList.remove('invalid');
    }
  
});
