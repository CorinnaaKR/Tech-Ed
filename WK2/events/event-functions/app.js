//callback functions are functions whihch are used as arguements for another method or function

//TODO: Add each item in the area to the console (3 times ---> length)
//usuable loops for this case
// -For
// -forEach() ---> array method
//for...of

//when a function doesnt have a name, it is an annoymous function
//we an use annoymous functions when do not want to call then again or reuse
//callback functions - when added in line- tend to be annoymous (function as part of the like as code)
const friends = ["Sam", "Grace", "Aaron"];

friends.forEach(function (item) {
  console.log(item);
});

//second scenario
//TODO: i want to give the user the following message: welcome message, tell them their username, amount of missed messages
//object to store the users data
//functions, one per task

const Corinna = {
  personName: "Corinna",
  username: "corinna805",
  missedMessages: 8,
};

function welcomeUser() {
  console.log(`Welcome &{user}`);
}

function sayUsername(username) {
  console.log(`Your username is ${username}`);
}

function sayMissedMessages(numberOfMessages) {
  console.log(`You have ${numberOfMessages} missed messages`);
}
function enterWebsite(
  welcome,
  username,
  missedMessages,
  welcomeMessage,
  usernameData,
  numberOfMessages
) {
  welcome(welcomeMessage);
  username(usernameData);
  missedMessages(numberOfMessages);
}

enterWebsite(
  welcomeUser,
  sayUsername,
  sayMissedMessages,
  "Nicky",
  "nichy.teched",
  3
);

//workshop

function notifyUser() {
  console.log("notifyUser function was called!");
}

function myAwesomeFunction(notifyUser) {
  console.log("Running myAwesome Function...doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  notifyUser();
}

myAwesomeFunction(notifyUser);
