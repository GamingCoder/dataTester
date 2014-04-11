# dataTester [![Build Status](https://travis-ci.org/GamingCoder/dataTester.svg)](https://travis-ci.org/GamingCoder/dataTester)

Run tests against incoming data.

# Sample
```js
// require dataTester module
var dataTester = require('dataTester');
// Create new Instance
var tester = new dataTester();

// Add test
tester.addTest('string', function(data) {
	return typeof data == 'string';
});

// Register listener for results
tester.on('result', function(result) {
	console.log('Passed tests: ' + result.tests);
	console.log('Data: ' + result.data);
});

// send some sample data
tester.emit('data', 'randomMessage');
tester.emit('data', 12345);
tester.emit('data', 'randomMessage');
tester.emit('data', {});
tester.emit('data', 'randomMessage');
tester.emit('data', []);
// you should see the listener was called 6 times
```

# methods
## addTest(name, function)
Alias for `setTest`.
## setTest(name, test)
The `setTest` method accepts a `name` string and `test` function and stores the test function under the specified name.
The `test` function has to return true or false.
## getTest(name)
The `getTest` method accepts a `name` string and returns the test stored under the specified name.
## delTest(name)
The `delTest` method accepts a `name` string and deletes the test stored under the specified name.

# events
## data(data)
The `data` event is used to send the tester a new data entry with the `data` parameter containing the data.
## result(result)
The `result` event is fired when the tests are finished. It returns a result containing a `tests` array that contains all passed tests and a `data` field containing the data.

# License
MIT