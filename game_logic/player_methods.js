const checkForShip = require('./ship_methods.js').checkForShip;

function validateLocation (player, coordinates) {
	const x = coordinates[0];
	const y = coordinates[1];

	const spaceAvailable = !checkForShip(player, coordinates);

	if ((x <= 9 && x >= 0) && (y <= 9 && y >= 0)) {
		return spaceAvailable; // decides whether this valid space is occupied
	} else {
		return false;
	}
}

function validateLocations (player, locations) {
	const validated = locations.map(function (location) {
		return validateLocation(player, location);
	});
	return validated.indexOf(false) === -1;
}

function placeShip (player, ship, startingCoordinates, direction) {
	if (!direction) throw Error('You left out the direction! I need that for math!');
	const proposedLocations = [];
	let previousLocation,
		rowNumber,
		columnNumber;

	for (let i = 0; i < ship.size; i++) {
		previousLocation = proposedLocations[i - 1] || [];
		rowNumber = previousLocation[0];
		columnNumber = previousLocation[1];

		proposedLocations[i] = (i === 0)
			? startingCoordinates
			: (direction === 'horizontal')
				? [rowNumber, ++columnNumber]
				: [++rowNumber, columnNumber];
	}

	if (validateLocations(player, proposedLocations)) {
		ship.locations = proposedLocations;
	} else {
		return false;
	}
}

function getRandomCoordinates () {
	const x = Math.floor(Math.random() * 9);
	const y = Math.floor(Math.random() * 9);
	return [x, y];
}

function getRandomDirection () {
	return Math.random() > 0.5
		? 'horizontal'
		: 'vertical';
}


//fire(player, getRandomCoordinates());
//placeShip(computerPlayer, computerPlayer.ship[0], getRandomCoordinates(), getRandomDirection());

module.exports = {
	placeShip: placeShip,
	validateLocations: validateLocations,
	validateLocation: validateLocation
};