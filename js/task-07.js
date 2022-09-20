const refs = {
  input: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};

refs.input.addEventListener("input", function (event) {
  refs.textEl.style.fontSize = event.target.value + "px";
});
