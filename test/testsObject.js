var test = require('tape');
var dataTester = require('../index.js');

test('tests object', function(t) {
	t.plan(3);
	var tester = new dataTester();
	
	t.equal(typeof tester.tests, 'object', 'should be object');
	t.deepEqual(tester.tests, {}, 'should be empty');

	tester.tests['string'] = function(data) {
		return typeof data == 'string';
	};
	t.ok(tester.tests.hasOwnProperty('string'), 'string test is set');
});