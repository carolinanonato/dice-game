// This function returns a random Number between 1 (inclusive) and the argument passed to the function
// If no argument is passed, 6 is set, ie, returns a number between and including 1 to 6
// 		For example: 
//    getRandomDiceRoll() will return either 1, 2, 3, 4, 5, 6
const getRandomDiceRoll = function(sides=6) {
  return Math.floor( Math.random() * sides ) + 1
}

// Here's a test roll, check the console!

// 1) Call getRandomDiceRoll() and store the result as a variable named "diceRoll"
let diceRoll = getRandomDiceRoll();

console.log(diceRoll);

// 2) Update user interface (document), showing the diceface (svg image) that matches the roll number

image = document.querySelector("img");

if (diceRoll === 1) {
  document.querySelector('img').src="img/dice1.svg"
}

if (diceRoll === 2) {
  document.querySelector('img').src="img/dice2.svg"
}

if (diceRoll === 3) {
  document.querySelector('img').src="img/dice3.svg"
}

if (diceRoll === 4) {
  document.querySelector('img').src="img/dice4.svg"
}

if (diceRoll === 5) {
  document.querySelector('img').src="img/dice5.svg"
}

if (diceRoll === 6) {
  document.querySelector('img').src="img/dice6.svg"
}


// 3) Use `diceRoll` to update the label "You rolled: #" (replacing # with the roll)




// 4) Wrap the dice roll procedure in a function named rollTheDice(), call it from the console to test
