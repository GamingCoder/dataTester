var test = require('tape');
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