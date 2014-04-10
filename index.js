var util = require('util');
var EventEmitter = require('events').EventEmitter;

function dataTester () {
	EventEmitter.call(this);
}

util.inherits(dataTester, EventEmitter);

exports = module.exports = dataTester;