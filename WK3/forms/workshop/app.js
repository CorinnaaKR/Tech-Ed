const form = document.getElementById("user-information");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formDataTemplate = new FormData(form);

  console.log(formDataTemplate);

  const formValues = Object.fromEntries(formDataTemplate);
}
