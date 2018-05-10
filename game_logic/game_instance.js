const fire = require('./ship_methods.js').fire;

function checkGameStatus (players) {
	return false;
}

function takeTurn (opposingPlayer, guessFunction) {
	const coordinates = guessFunction();
	fire(opposingPlayer, coordinates);
	const gameOver = checkGameStatus();

	return gameOver;
}

module.exports.checkGameStatus = checkGameStatus;
module.exports.takeTurn = takeTurn;