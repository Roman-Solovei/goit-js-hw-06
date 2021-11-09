const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulList = document.querySelector("#ingredients");

const ingredientsEl = ingredients.map(ingredient => {
  const ulEl = document.createElement("li");
    ulEl.textContent = `${ingredient}`;
    ulEl.classList.add('item');  
    ulList.append(ulEl);  
}).join('');


