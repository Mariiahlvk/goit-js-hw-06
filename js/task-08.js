const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("Пожалуйста, заполните все поля!");
  }
  console.log({ email: email.value, password: password.value });
  event.currentTarget.reset();
}
