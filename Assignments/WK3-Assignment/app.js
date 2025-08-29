console.log("hello world");

//Game Logic
//When the user clcikers on the cookie, total count of cookies goes up by 1 (event listener - click)
//When the user clicker on the buy button in an upgrade button in a upgrade shop, the total count of cookies goes down by the cost of the upgrade, and the CPS value goes up

//you will need the functions to contain the game logic
//to creat the logic for the shop upgrades:
//OPTION 1 = yuou could have a function per upgrade
//OPTION 2 = you could have a resusable function that works for ALL the upgrades

//LOCAL STORAGE TIP
//Make sure the local storage values are updated after the user buys an upgrade or when the user clicks on the cookie (event listener to update local storage or maybe set interval to dave progress)

//data storage
let cookierCount = 0;
let CPS = 0;

// let stats = {
//     cookieCount: 0,
//     cps: 0,
// };

//if there is data in the local storage, update this with data so the user picks it up where they left off

//shop upgrades
//Fetch upgrads from API:
//To creat multiple DOM elements in a more convenient way, you can use a loop

//creat a DOM element to contain the upgrades in the shop
//create an element
//assign value to text content
//append to DOM
//should then be able to see upgrades on page

//INTERVAL

setInterval(function () {
  cookieCount += cps;
  //here, update DOM to reflect the change in values
  //save the values in the local storage
}, 1000);
