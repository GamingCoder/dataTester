var test = require('tape');
var tests = require('./sample_tests.js');
var dataTester = require('../index.js');

test('emit and receive events', function(t) {
	t.plan(3);
	var tester = new dataTester();
	tester.on('data', function(data) {
		t.ok(true, 'received data');
	});

	tester.emit('data', 'hello world');
	tester.emit('data', 'hello bob');
	tester.emit('data', 'hello alice');
});

test('emit and receive events with tests', function(t) {
	t.plan(3);
	var tester = new dataTester();
	
	tester.addTest('string', tests.string);

	tester.on('result', function(result) {
		if(result.data == 'randomMessage') t.deepEqual(result.tests, ['string'], 'test should be string');
	});

	tester.emit('data', 'randomMessage');
	tester.emit('data', 12345);
	tester.emit('data', 'randomMessage');
	tester.emit('data', {});
	tester.emit('data', 'randomMessage');
	tester.emit('data', []);
});