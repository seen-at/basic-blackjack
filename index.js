let player = {
	name: "Tomas",
	chips: 200
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById("player-el")

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

function startGame() {
	isAlive = true;
	let firstCard = getRandomNumber();
	let secondCard = getRandomNumber();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
	renderGame();
}

function renderGame() {
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
	messageEl.textContent = message
}

function newCard() {
	if (isAlive === true && hasBlackJack === false) {
		let newCard = getRandomNumber();
		sum += newCard;
		cards.push(newCard);
		renderGame();
	}
}
