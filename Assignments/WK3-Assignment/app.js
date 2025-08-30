console.log("hello world");

//Game Logic
//When the user clicks on the cookie, total count of cookies goes up by 1 (event listener - click)
// let stats = {
//     cookieCount: 0,
//     cps: 0,
// };
//shop upgrades
//Fetch upgrads from API:
//To creat multiple DOM elements in a more convenient way, you can use a loop
//API fetching for upgrades

///data storage

//When the user clicks on the buy button in an upgrade button in a upgrade shop, the total count of cookies goes down by the cost of the upgrade, and the CPS value goes up

//you will need the functions to contain the game logic
//to creat the logic for the shop upgrades:
//OPTION 1 = yuou could have a function per upgrade
//OPTION 2 = you could have a resusable function that works for ALL the upgrades

//Creating a event listener for the button

let cookieCounter = 0;
let CPS = 0;

const cookieClicker = document.getElementById("cookieClicker");

function handleClick() {
  cookieCounter = cookieCounter + 1;
  console.log(cookieCounter);
}

cookieClicker.addEventListener("click", handleClick);


//create Interval that adds CPS to cookie counter




//Calling API

async function cookieUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log(response);

  const data = await response.json();
  console.log(data);

  return data;
}
cookieUpgrades();

//creating upgrades button
const shopContainer = document.getElementById("shop-container");
async function createUpgrades() {
  const upgrades = await cookieUpgrades();
  for (let i = 0; i < upgrades.length; i++) {
    const upgradesButton = document.createElement("button");
    upgradesButton.textContent = upgrades[i].name;
    console.log(upgradesButton);
    shopContainer.appendChild(upgradesButton);
    upgradesButton.addEventListener("click", function () {
    purchaseUpdgrades(i)
    });
  }
}

createUpgrades();

function purchaseUpdgrades(i) {
upgrades = 
}

createThumbnails();

//Create new element to hold API info, and appending to DOM

// function createNewPtag(APIurl) {
//   const shopContainer = document.querySelector("shop-container");

//   const newpTag = document.createElement("p");

//   newpTag.textContent = APIurl;

//   shopContainer.appendChild(newpTag);
// }

// async function addUpgradestoP() {
//   const UpgradesAPI = await cookieUpgrades();

//   getUpgrades(UpgradesAPI);
// }

// addUpgradestoP();

//creat for loop for array of API data

//LOCAL STORAGE TIP
//Make sure the local storage values are updated after the user buys an upgrade or when the user clicks on the cookie (event listener to update local storage or maybe set interval to dave progress)

//if there is data in the local storage, update this with data so the user picks it up where they left off

//INTERVAL

// setInterval(function () {
//   cookieCount += cps;
//here, update DOM to reflect the change in values
//save the values in the local storage
// }, 1000);

//creat a DOM element to contain the upgrades in the shop
//create an element
//assign value to text content
//append to DOM
//should then be able to see upgrades on page

//CREATING NEW ELEMENTS
// async function getUpgrades() {
//   const response = await fetch(
//     "https://cookie-upgrade-api.vercel.app/api/upgrades"
//   );
//   const data = await response.json();
//   console.log(data);
//filtering the data to the properties that we need --> data wrangling
//   const wrangledData = data.textContent;
//   console.log(wrangledData);
//   return wrangledData;
// }
