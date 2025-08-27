console.log("hello world");

//TODO: Say hi
//structure
//function functionNameTask(Optionalparamenters) {
//action
//}

//sayHi();

function greetUser(username, greeting) {
  console.log(`${greeting}, ${username}`);
}

greetUser("Corinna", "Good Morning");

//functions need to be called/invoked to be executed
//parameters are variables for our functions

//Our functions have a speicific scorp ----> block scope/function scope

function add(a, b) {
  console.log(a + b);
}

add(10, 8);

//console.log(a); //this errors because our global scrope does not have access to the block scope of our function
//add();
//("");
//if we want to take an element inside a function (block scope), and make it accessible to the rest of our app (global scope), we can use the keyword RETURN

//function add(a, b) {
//return a + b;
//}

//function subtract();

//console.log(add(6 + 3));

// function subtract(c, d) {
//   console.log(c - d);
// }
// subtract(6, 3);
// subtract(9, 7);

// function multiply(c, d) {
//   console.log(c * d);
// }
// multiply(10, 5);

// function divide(c, d) {
//   console.log(c / d);
// }

// divide(100, 5);

function add(c, d) {
  return c + d;
}
add(3, 5);

function multiply(c, d) {
  return c * d;
}
multiply(7, 11);

function subtract(c, d) {
    return c - d
}
subtract(100, 5)

function divide(c, d) {
    return c / d
}
divide(300, 10)


function calculate(c, d, operator) {
  if (operator === "+") {
    return add(c, d);
  } else if (operator === "-") {
    return subtract(c, d);
  } else if (operator === "*") {
    return multiply(c, d);
  } else if (operator === "/") {
    return divide(a, b); {
    }
  };