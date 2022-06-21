let player = {
	name: "Tomas",
	chips: 200
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

// capturing all the contents of the page from HTML 
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById("player-el")

// displaying the player object in the <p> section of the html
playerEl.textContent = `${player.name} : \$${player.chips}`;

function getRandomNumber() {
	let randomNumber = Math.floor(Math.random() * 13 + 1)
	if (randomNumber > 10) {
		return 10
	} else if (randomNumber === 1) {
		return 11
	} else {
		return randomNumber
	}
}

// startGame() function in the Start Game put into effect
// get two random values of cards and stores them in the array
function startGame() {
	isAlive = true;
	let firstCard = getRandomNumber();
	let secondCard = getRandomNumber();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
	renderGame();
}

// renderGame() which displays the values of cards generated in startGame()
// dispays the message for different values of sum
function renderGame() {
	// adds the numbers from the array beside Cards: string	
	cardsEl.textContent = "Cards: "
	for (let i = 0; i < cards.length; i += 1) {
		cardsEl.textContent += cards[i] + " "
	}

	sumEl.textContent = `Sum: ${sum}`;

	if (sum <= 20) {
		message = "Do you want to draw another card?"
	} else if (sum === 21) {
		message = "Congrats!! You got BLACKJACK!"
		hasBlackJack = true;
	} else {
		message = "You are out of the game!"
		isAlive = false;
	}
	// captures message from if--else and converts the message-el in html to the captured message
	messageEl.textContent = message
}

// new random number generated only if certain conditions are fulfilled, then added to the array
function newCard() {
	if (isAlive === true && hasBlackJack === false) {
		let newCard = getRandomNumber();
		sum += newCard;
		cards.push(newCard);
		renderGame();
	}
}
