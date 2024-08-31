"use strict";
// document.querySelector(".message").textContent = "Correct Number";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// //get input value
// document.querySelector(".guess").value;

//define secret number outside the event handler
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// score called state variable cause is part of the application state
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
	document.querySelector(".message").textContent = message;
};

// document.querySelector(".number").textContent = secretNumber;
document.querySelector(".check").addEventListener("click", function () {
	// the return value is gonna be a string so we have to turn it to a number in case we want to compare it
	// const guess = document.querySelector(".guess").value;
	const guess = Number(document.querySelector(".guess").value);

	// when is no input
	if (!guess) {
		// document.querySelector(".message").textContent = "⛔️ No number!";
		//refactoring by using the declared function
		displayMessage("⛔️ No number!");
	} else if (guess === secretNumber) {
		// document.querySelector(".message").textContent = "🎉Correct Number!";
		displayMessage("🎉Correct Number!");
		document.querySelector(".number").textContent = secretNumber;
		document.querySelector("body").style.backgroundColor = "#60b347";
		//change the style of the number border
		document.querySelector(".number").style.width = "30rem";
		//set highscore
		if (score > highscore) {
			highscore = scrore;
			document.querySelector(".highscore").textContent = highscore;
		}

		//when guess us too high
	} else if (guess !== secretNumber) {
		if (score > 1) {
			// document.querySelector(".message").textContent =
			// 	guess > secretNumber ? "📈Too high!" : "📉Too Low!";
			displayMessage(guess > secretNumber ? "📈Too high!" : "📉Too Low!");
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			// document.querySelector(".message").textContent = "Game over!";
			displayMessage("Game over!");
			// to prevent the - values in score section
			document.querySelector(".score").textContent = 0;
		}
	}

	// else if (guess > secretNumber) {
	// 	if (score > 1) {
	// 		document.querySelector(".message").textContent = "Too high!";
	// 		score--;
	// 		document.querySelector(".score").textContent = score;
	// 	} else {
	// 		document.querySelector(".message").textContent = "Game over!";
	// 		// to prevent the - values in score section
	// 		document.querySelector(".score").textContent = 0;
	// 	}
	// 	//when guess is too low
	// } else if (guess < secretNumber) {
	// 	if (score > 1) {
	// 		document.querySelector(".message").textContent = "Too low!";
	// 		score--;
	// 		document.querySelector(".score").textContent = score;
	// 	} else {
	// 		document.querySelector(".message").textContent = "Game over!";
	// 		document.querySelector(".score").textContent = 0;
	// 	}
	// }
});
//select the element with the again class and attach a click event listener to reset the game functionality.
document.querySelector(".again").addEventListener("click", function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;

	// document.querySelector(".message").textContent = "Start guessing...";
	displayMessage("Start guessing...");
	document.querySelector(".score").textContent = score;
	document.querySelector(".number").textContent = "?";
	document.querySelector(".guess").textContent = "";
	document.querySelector("body").style.backgroundColor = "#222";
	document.querySelector("body").style.width = "15rem";
});
