var test = require('tape');
var dataTester = require('../index.js');

test('has properties and functions', function(t) {
	t.plan(5);
	var tester = new dataTester();

	// Events
	t.ok(typeof tester.emit == 'function', 'emit function');
	t.ok(typeof tester.on == 'function', 'on function');

	// Tests
	t.ok(typeof tester.tests == 'object', 'tests object');
	t.ok(typeof tester.setTest == 'function', 'setTest function');
	t.ok(typeof tester.delTest == 'function', 'delTest function');
});
/*
test('basic example', function(t) {
	t.plan(2)

	var tester = new dataTester();

	tester.setTest('string', function(data) {
		return typeof data == 'string';
	});

	tester.on('string', function(data) {
		t.equal(data, 'string');
	});

	tester.emit('data', 'string');
	tester.emit('data', 123);
	tester.emit('data', {hi: "bob"});
	tester.emit('data', "string");
});*/