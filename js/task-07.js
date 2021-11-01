const testText = document.querySelector('#text');

const fontSizeControl = document.querySelector('#font-size-control');

fontSizeControl.addEventListener('input', () => {

  const size = fontSizeControl.value;
  
  testText.style.fontSizeControl = size + "px";

});