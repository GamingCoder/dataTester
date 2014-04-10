var util = require('util');
var EventEmitter = require('events').EventEmitter;

function dataTester () {
	EventEmitter.call(this);

	// Set empty tests object
	this.tests = {};
}

util.inherits(dataTester, EventEmitter);

dataTester.prototype.setTest = function(name, test) {
	this.tests[name] = test;
};
dataTester.prototype.getTest = function(name) {
	return this.tests[name];
};
dataTester.prototype.delTest = function(name) {
	delete this.tests[name];
};

exports = module.exports = dataTester;