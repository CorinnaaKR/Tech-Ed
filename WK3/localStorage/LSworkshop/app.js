//const form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   function savePreferences(event) {
//     event.preventDefault();

//   const formData = new FormData(form);
//   const colour = formData.get("colour");

//   localStorage.setItem("colour", colour);

// const preferences = {
//     colour,
// };

const form = document.querySelector("forms");

function savePreferences(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const colour = formData.get("colour");
}

localStorage.setItem("preferences", JSON.stringify(preference));

form.addEventListener("sumbit", savePreferences);

const preferences = JSON.parse(localStorage.getItem("preferences"));
if (preferences) {
  const input = document.querySelector("input");
  input.value = preferences.colour;
}

function loadPreferences() {
  // load the prefs
  const preferences = JSON.parse(localStorage.getItem("preferences"));

  if (colour) {
    const input = document.querySelector("input");
    input.value = colour;
  }
  // if we have some prefs
  if (preferences) {
    // set the form value
    const input = document.querySelector("input");
    input.value = preferences.colour || "#000000"; // || is the "or" operator, it will use the value on the left if it's truthy, otherwise it will use the value on the right as a default value if colour isn't saved

    // set the body color to the user colour preference (intentional US / UK spelling difference...)
    const body = document.querySelector("body");
    body.style.color = preferences.colour || "#000000";
  }
}

//application --> local storage --> click drop downt to see local storage

//const colour = localStorage.getItem("colour");
