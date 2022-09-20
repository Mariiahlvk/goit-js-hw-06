function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const span = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");

changeColor.addEventListener("click", () => {
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  span.textContent = currentColor;
});
