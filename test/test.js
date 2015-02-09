var must = require('must');
var countries = require('../caribbean.json');
describe('caribbean-countries node module', function() {
	it('must have at least one test', function() {

		countries.must.exist();
	});
});
