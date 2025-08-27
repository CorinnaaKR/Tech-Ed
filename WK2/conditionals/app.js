console.log("hello world");
//if (condition) {#
//action
//} Example code.

//if (5 is more than 2) {
//send a nessage to the console that says: 5 is more than 2
//}

if (5 > 2) {
  console.log("5 is greater than 2");
}

let apples = 5;
let pears = 3;

if (apples < pears) {
  console.log("You need more apples");
} else if (apples > pears) {
  console.log("You need more pears");
} else if (apples == pears) {
  console.log("Apples and Pears are the same");
}

//else {
//  console.log("You need more pears");
//}

//CONDITIONAL WORKSHOP

let U = 12;
let PG = 15;
let OVER18 = 18;

//movieRating === PG, U, OVER

//let age = 17;
//let movieRating = "PG";

//if (age > 17) {
//console.log("You can watch any movie!");
//} else if (age === 17)
//if (movieRating === "PG") {
//     console.log("You can watch the movie!");
//   } else if (age >= PG) {
//     console.log("You can watch the movie!");
//   } else {
//     console.log("You can watch any U and PG movies");
//   }

let age = 12;
let movieRating = OVER18;
if (age < OVER18) {
  console.log("Ooo not quite old enought yet! Check out the U movies");
} else if (age <= PG) {
  console.log("Check out any of of PG and U movies!");
}
