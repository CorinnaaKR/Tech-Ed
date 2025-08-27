console.log("hello world");

for (let i = 1; i <= 10; i++) {
  console.log(`message ${i}`);
}

//const myFavouritefoods = [
//No difference between a let or const in this scenario.

let myFavouritefoods = [
  "pizza",
  "chocolate",
  "pasta",
  "ice cream",
  "cheese",
  "pastry",
];

let subjects = ["Maths", "English", "Science", "P.E"];

//for loop
for (let i = 0; i < subjects.length; i++) {
  console.log(subjects[i]);
}

//subject word is replacement for i and can be any word chosen by us

// let...of
for (let subject of subjects) {
  console.log(subjects);
}

subjects.forEach(function (subjects) {
  console.log(subjects);
});

//TODO: I want to render 3 images in my page
//I need a container for the images
//i need a loop to perform a repetitive task
//i need the image source and alt text
//I need to store the images data
//I need to create and add the images to the DOM (the page)

let imgURLs = [
  "https://plus.unsplash.com/premium_photo-1673002094195-f18084be89ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1512641406448-6574e777bec6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
let altText = ["freedom", "sunset", "gold colds"];

//select the container
const imageContainer = document.querySelector(".imageContainer");
for (let i = 0; i < altText.length; i++) {
  //create the image element
  const pTag = document.createElement("p");
  pTag.textContent = altText[i];
  pTag.className = "alt=Text";
  imageContainer.appendChild(pTag);
}

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}
