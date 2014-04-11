var test = require('tape');
var dataTester = require('../index.js');

// tests
var stringTest = function(data) {
	return typeof data == 'string';
};

test('tests object', function(t) {
	t.plan(2);
	var tester = new dataTester();
	
	t.equal(typeof tester.tests, 'object', 'should be object');
	t.deepEqual(tester.tests, {}, 'should be empty');
});

test('add and get test', function(t) {
	t.plan(1);
	var tester = new dataTester();

	// Add string test
	tester.setTest('string', stringTest);
	t.equal(tester.getTest('string'), tester.tests['string'], 'getTest returns same result as direct access');

});

test('del test', function(t) {
	t.plan(1);
	var tester = new dataTester();

	// Add string test
	tester.setTest('string', stringTest);
	tester.delTest('string');
	t.equal(tester.getTest('string'), undefined, 'getTest returns undefined');

});