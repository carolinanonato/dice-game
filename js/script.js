// This function returns a random Number between 1 (inclusive) and the argument passed to the function
// If no argument is passed, 6 is set, ie, returns a number between and including 1 to 6
// 		For example: 
//    getRandomDiceRoll() will return either 1, 2, 3, 4, 5, 6

document.querySelector("img").addEventListener("click", rollTheDice);

function rollTheDice() {

const getRandomDiceRoll = function(sides=6) {
  return Math.floor( Math.random() * sides ) + 1
}

// Here's a test roll, check the console!

// 1) Call getRandomDiceRoll() and store the result as a variable named "diceRoll"
let diceRoll = getRandomDiceRoll();


// 2) Update user interface (document), showing the diceface (svg image) that matches the roll number

// 3) Use `diceRoll` to update the label "You rolled: #" (replacing # with the roll)

image = document.querySelector("img");

if (diceRoll === 1) {
  document.querySelector('img').src="img/dice1.svg"
  document.querySelector('span').textContent= diceRoll;
}

if (diceRoll === 2) {
  document.querySelector('img').src="img/dice2.svg"
  document.querySelector('span').textContent= diceRoll;
}

if (diceRoll === 3) {
  document.querySelector('img').src="img/dice3.svg"
  document.querySelector('span').textContent= diceRoll;
}

if (diceRoll === 4) {
  document.querySelector('img').src="img/dice4.svg"
  document.querySelector('span').textContent= diceRoll;
}

if (diceRoll === 5) {
  document.querySelector('img').src="img/dice5.svg"
  document.querySelector('span').textContent= diceRoll;
}

if (diceRoll === 6) {
  document.querySelector('img').src="img/dice6.svg"
  document.querySelector('span').textContent= diceRoll;
}

}

// 4) Wrap the dice roll procedure in a function named rollTheDice(), call it from the console to test
rollTheDice()