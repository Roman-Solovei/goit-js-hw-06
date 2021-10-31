

let counterValue = Number(document.querySelector('#value').textContent);


const inkBtn = document.querySelector("[data-action='increment']");

const dekBtn = document.querySelector("[data-action='decrement']");

inkBtn.addEventListener('click', () => { 
    counterValue += 1;    
    document.querySelector('#value').innerHTML = counterValue;   
  });

  dekBtn.addEventListener('click', () => {
    counterValue -= 1;     
    document.querySelector('#value').innerHTML = counterValue; 
  });
