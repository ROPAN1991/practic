const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createUl = document.querySelector('ul')

const createLi = count => {
  const liList = []
  for(let i = 0; i < count; i += 1) {
    const elLi = document.createElement('li')
    elLi.classList.add('item')
    elLi.textContent = ingredients[i]
   
    liList.push(elLi)
    
  }
  createUl.append(...liList)
  
}

createLi(ingredients.length)
