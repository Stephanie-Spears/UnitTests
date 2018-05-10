const expect=require('chai').expect;
//Mocha's representation of a test suite (the describe function) takes two parameters-->a string describing all tests inside, and a function wrapping them all together
describe('checkForShip', function () {
	const checkForShip = require('../game_logic/ship_methods').checkForShip;
	it('should correctly report no ship at given players coordinate', function () {
		player = {
			ships: [
				{
					locations: [[0, 0]]
				}
			]
		};
		expect(checkForShip(player, [9, 9])).to.be.false;
	});
});
