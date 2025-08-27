// console.log("Hello world");
// const eventButton = document.getElementById("Click-Me");
// console.log(eventButton);

// function handleClick() {
//   console.log("I clicked!");
// }

// eventButton.addEventListener("click", handleClick);

const eventButton = document.querySelector("#Click-Me");
console.log(eventButton.textContent);

function handleClick() {
  console.log("I clicked!");
}

eventButton.addEventListener("click", handleClick);

//second event in same function

function handleMouseover() {
  console.log("Do you want to click?");
}
eventButton.addEventListener("mouseover", handleMouseover);

//testing understanding

const paragraphButton = document.getElementById("#paragraph-button");

function handleMouseover() {}
