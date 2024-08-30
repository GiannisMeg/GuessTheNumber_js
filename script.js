"use strict";
// document.querySelector(".message").textContent = "Correct Number";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// //get input value
// document.querySelector(".guess").value;

//define secret number outside the event handler
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// score called state variable cause is part of the application state
let score = 20;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
	// the return value is gonna be a string so we have to turn it to a number in case we want to compare it
	// const guess = document.querySelector(".guess").value;
	const guess = Number(document.querySelector(".guess").value);

	// in application like this we have to check if there is a value as first scenario
	if (!guess) {
		document.querySelector(".message").textContent = "⛔️ No number!";
	}
});
