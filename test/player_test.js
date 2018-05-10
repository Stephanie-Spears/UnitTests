const expect = require('chai').expect;

describe('PLAYER METHODS', function () {
	describe('validateLocation', function () {
		const validateLocation = require('../game_logic/player_methods.js').validateLocation;
		let player;

		beforeEach(function () {
			player = {
				ships: [
					{
						locations: [[9, 9]]
					}
				]
			};
		});
	});

	it('should confirm valid for unoccupied locations in range', function () {
		const location = [0, 0];
		const actual = validateLocation(player, location);
		expect(actual).to.be.ok;
	});

	it('should confirm INvalid for occupied locations in range', function () {
		const location = [9, 9];
		const actual = validateLocation(player, location);
		expect(actual).to.be.false;
	});

	it('should confirm INvalid for UNoccupied locations OUT of range', function () {
		const locationHigh = [10, 10];
		const locationLow = [-1, -1];
		expect(validateLocation(player, locationHigh)).to.be.false;
		expect(validateLocation(player, locationLow)).to.be.false;
	});
});

describe('validateLocations', function () {
	const validateLocations = require('../game_logic/player_methods.js').validateLocations;
	let player;

	beforeEach(function () {
		player = {
			ships: [
				{
					locations: [[0, 0]]
				}
			]
		};
	});

	it('should correctly report a list of unoccupied locations is valid', function () {
		const locations = [[1, 1], [1, 2], [1, 3], [1, 4]];
		expect(validateLocations(player, locations)).to.be.ok;
	});

	it('should correctly report a problem if any location in the list is invalid', function () {
		const locations = [[1, 1], [1, 2], [1, 3], [0, 0]];
		expect(validateLocations(player, locations)).to.be.false;
	});
});

describe('placeShip', function () {
	const placeShip = require('../game_logic/player_methods.js').placeShip;
	let player;

	beforeEach(function () {
		player = {
			ships: [
				{
					size: 1,
					locations: []
				},
				{
					size: 2,
					locations: [[1, 0], [1, 1]]
				},
			]
		};
	});
});