const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
const newList = [];

ingredients.forEach((element) => {
  const newEl = document.createElement("li");
  newEl.classList.add("item");
  newEl.textContent = element;

  newList.push(newEl);
});
ingredientsEl.append(...newList);
