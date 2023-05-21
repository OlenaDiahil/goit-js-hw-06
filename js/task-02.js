const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

const liEl = ingredients.map((ingredient) => '<li class="item">' + ingredient + '</li>');

listEl.insertAdjacentHTML('beforeend', liEl.join(''));

console.log(listEl);