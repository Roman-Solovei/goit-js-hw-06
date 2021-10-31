"use strict";

const menuItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${menuItems.length}`);



const  categoryItems = document.querySelectorAll('#categories>li');
categoryItems.forEach(elem => {
console.log(
    `Category: ${elem.firstElementChild.textContent}
Elements: ${elem.lastElementChild.children.length}`,
  );
});

