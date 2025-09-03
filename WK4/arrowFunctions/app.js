function add(a, b) {
  return a + b;
}

//arrow function
const add = (a, b) => {
  return a + b;
};

// in this example, the return keyword is implied
const add = (a, b) => a + b;

//callback function
const array = [1, 2, 3];

array.forEach(function (item) {
  console.log(item);
});

//arrow function
array.forEach((item) => console.log(item));

//Turn the following traditional functions into arrow functions:

function greet(name) {
  return `Hello ${name}`;
}

//Arrow Function
const greet = (name) => `Hello ${name}`;

//==============================
function handleSubmit(event) {
  event.preventDefault();
  const username = event.target.username.value;
  const message = event.target.message.value;

  console.log({ username: username, message: message });
}

form.addEventListener("submit", handleSubmit);

//Arrow Function
const handleSumbit = (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const message = event.target.message.value;
};

//==============================
button.addEventListener("click", function () {
  let count = 0;
  count += 1;
});

//Arrow Functions
button.addEventListener("click", () => {
  let count = 0;
  count += 1;
});

//==============================
games.forEach(function (game) {
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");
});

//Arrow Function
games.forEach(() => {
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");
});

//==============================
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

//Arrow Function
const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};
