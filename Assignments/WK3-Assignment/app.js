console.log("hello world");

//CREATING EVENT LISTENER FOR CLICKs

const cookieClicker = document.getElementById("cookieClicker");
let timesClicks = 0;

function handleClick() {
  timesClicks += 1;
  clickerData.cookieAmount = clickerData.cookieAmount + 1;
  console.log(clickerData.cookieAmount);
}

cookieClicker.addEventListener("click", handleClick);

const clickerData = {
  cookieAmount: 0,
  cps: 1,
};

//INTERVAL & LOCAL STORAGE
setInterval(function () {
  clickerData.cookieAmount += clickerData.cps;
  console.log(clickerData.cookieAmount);
  const cookieAmountText = document.getElementById("cookieAmount");
  const cpsText = document.getElementById("cps");
  cookieAmountText.textContent = `Cookies Amount: ${clickerData.cookieAmount}`;
  cpsText.textContent = `CPS: ${clickerData.cps}`;

  const stringifiedClickerData = JSON.stringify(clickerData);
  localStorage.setItem("clickerData", stringifiedClickerData);
}, 1000);

//CALLING API

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

//RETRIEVING & CALLING DATA

function purchaseUpdgrades(i) {
  upgrades = null;
}

function loadedData() {
  const retrievedData = localStorage.getItem("clickerData");
  const loadedData = JSON.parse(retrievedData);
  clickerData.cookieAmount = loadedData.cookieAmount;
  clickerData.cps = loadedData.cps;
}

loadedData();

//CREATING UPGRADES BUTTONS

const shopContainer = document.getElementById("shop-container");
async function createUpgrades() {
  const upgrades = await cookieUpgrades();
}
for (let i = 0; i < upgrades.length; i++) {
  const upgradesButton = document.createElement("button");
  upgradesButton.textContent = upgrades[i].name;
  console.log(upgradesButton);

  shopContainer.appendChild(upgradesButton);

  upgradesButton.addEventListener("click", function () {
    purchaseUpgrades(i);
    if (clickerData.cookieAmount >= upgrades.cost) {
      clickerData.cookieAmount -= upgrades.cost;
      clickerData.cps += upgrades.increase;
      alert(`Purchased ${upgrades.name}!`);
    } else {
      alert("More cookies needed!");
    }
  });
}

createUpgrades();

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
//OPTION 2 = you could have a resusable function that works for ALL the upgrades//Create new element to hold API info, and appending to DOM

//creat3 for loop for array of API data

//LOCAL STORAGE TIP
//Make sure the local storage values are updated after the user buys an upgrade or when the user clicks on the cookie (event listener to update local storage or maybe set interval to dave progress)

//if there is data in the local storage, update this with data so the user picks it up where they left off

//creat a DOM element to contain the upgrades in the shop
//create an element
//assign value to text content
//append to DOM
//should then be able to see upgrades on page
