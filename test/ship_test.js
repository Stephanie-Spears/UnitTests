const expect=require('chai').expect;
//Mocha's representation of a test suite (the describe function) takes two parameters-->a string describing all tests inside, and a function wrapping them all together
describe('checkForShip', function () {
	const checkForShip = require('../game_logic/ship_methods').checkForShip;
	it('should correctly report no ship at given players coordinates', function () {
		player = {
			ships: [
				{
					locations: [[0, 0]]
				}
			]
		};
		expect(checkForShip(player, [9, 9])).to.be.false;
	});

	it('should correctly report a ship located at the given coordinates', function () {
		player = {
			ships: [
				{
					locations: [[0, 0]]
				}
			]
		};
		expect(checkForShip(player, [0, 0])).to.be.true;
	});

	it('should handle ships located at more than one coordinate', function () {
		player = {
			ships: [
				{
					locations: [[0, 0], [0, 1]]
				}
			]
		};
		expect(checkForShip(player, [0, 0])).to.be.true;
		expect(checkForShip(player, [0, 1])).to.be.true;
		expect(checkForShip(player, [9, 9])).to.be.false;
	});

});
