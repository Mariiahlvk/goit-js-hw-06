const categoriesEl = document.querySelectorAll(".item");
console.log("Number of Categories:", categoriesEl.length);

categoriesEl.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);

  const elements = item.querySelectorAll("ul > li");
  console.log("Elements:", elements.length);
});
