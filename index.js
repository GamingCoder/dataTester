var util = require('util');
var EventEmitter = require('events').EventEmitter;

function dataTester () {
	EventEmitter.call(this);

	// Set empty tests object
	this.tests = {};

	this.on('data', function(data) {
		var result = this.test(data);
		this.emit('result', result);
		for (i in result.tests) this.emit(result.tests[i], result.data);
	});
}

util.inherits(dataTester, EventEmitter);

// core methods
dataTester.prototype.setTest = function(name, test) {
	this.tests[name] = test;
};
dataTester.prototype.getTest = function(name) {
	return this.tests[name];
};
dataTester.prototype.delTest = function(name) {
	delete this.tests[name];
};
dataTester.prototype.test = function(data) {
	var result = {};
	result.tests = [];
	result.data = data;
	for (name in this.tests) {
		if (this.tests[name](data)) result.tests.push(name);
	}

	return result;
}

// aliases
dataTester.prototype.addTest = dataTester.prototype.setTest;

exports = module.exports = dataTester;