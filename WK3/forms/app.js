//Forms

const form = document.getElementById("user-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formDataTemplate = new FormData(form);

  console.log(formDataTemplate);

  const formValues = Object.fromEntries(formDataTemplate);
}

//TODO: add an event to out form submission
// - event listener
//prevent the default behaviour of the sumbit event --> to ad our input data to the URL
//creat an element to store our data --> object template
// form  {
//     full-name: blankSpace;
//     email: blankSpace;
//     password: blankSpace;
// }
//- add user input values to our object template
// - event handler
//TODO: handle the form data
// next step is to send form values to server to be processed (WK4 topic)
