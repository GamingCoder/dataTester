var tests = {};
// test if datatype is string
tests.string = function(data) {
	return typeof data == 'string';
};

exports = module.exports = tests;