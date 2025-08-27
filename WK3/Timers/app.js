setTimeout(function () {}, 5000);

//TODO: i want to see a message in the console after 5seconds have passed

// setTimeout(function() {
// console.log("This happened after 5 seconds")
// }, 5000);

//Interval: a task is performed repeatedly after a specific amount of time - we need to stop the interval otherwise it will run infinitely.

// setInterval(function() {
// }, delay)

//tODO: I want to send a message to the console repeatedly after two seconds
// setInterval(function() {
//     console.log("I happen every 2 seconds forever");
// }, 2000);

//what if we used a timeout to stop an interval?

// const robotInterval = setInterval(function() {
//     console.log("please someone stop me");
// }, 3000);

// function stopTheInterval() {
// setTimeout(function() {
//     clearInterval(robotInterval);
// }, 13000);
// }

// stopTheInterval();

setTimeout(function () {
  console.log("Your 5 second reminder");
}, 5000);

const eventButton = document.getElementById("timer");
console.log(eventButton);

const hiddenText = document.getElementById("text");
eventButton.addEventListener(
  "click",
  setTimer,
  () => {
    Text.style.visibility = "hidden";
  },
  5000
);

function setTimer(setTimeout) {
  console.log("Set a 5 second reminder");
}
