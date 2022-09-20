const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

counter.value = 0;

decrement.addEventListener("click", () => {
  counter.value -= 1;
  counter.textContent = counter.value;
});

increment.addEventListener("click", () => {
  counter.value += 1;
  counter.textContent = counter.value;
});
