var test = require('tape');
var tests = require('./sample_tests.js')
var dataTester = require('../index.js');

test('tests object', function(t) {
	t.plan(2);
	var tester = new dataTester();
	
	t.equal(typeof tester.tests, 'object', 'should be object');
	t.deepEqual(tester.tests, {}, 'should be empty');
});

test('add and get test', function(t) {
	t.plan(1);
	var tester = new dataTester();

	tester.setTest('string', tests.string);
	t.equal(tester.getTest('string'), tester.tests['string'], 'getTest returns same result as direct access');
	t.end()

});

test('del test', function(t) {
	t.plan(1);
	var tester = new dataTester();

	// Add string test
	tester.setTest('string', tests.string);
	tester.delTest('string');
	t.equal(tester.getTest('string'), undefined, 'getTest returns undefined');

});