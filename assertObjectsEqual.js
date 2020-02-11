const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = eqObjects;

// assertObjectsEqual({ a: 1 }, { a: 1 });
// assertObjectsEqual({ a: 1, b: 3 }, { a: 1 });
// assertObjectsEqual({ a: [1, 2, 3] }, { a: [1, 2, 3] });
// assertObjectsEqual({ a: [1, 2, 3] }, { a: [1, 2, 3, 4] });