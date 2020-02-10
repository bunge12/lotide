const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 3, 3, 5], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([ '2', 3 ], [ '2', 3, 4 ]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // =>
assertEqual(eqArrays([[2, 3], [4, [5]]], [[2, 3], [4, [5]]]), true); // =>
assertEqual(eqArrays([[2, 3], [4, [10]]], [[2, 3], [4, [10]]]), true); // =>
assertEqual(eqArrays([[2, 3], [4, [6, 7, 8]]], [[2, 3], [4, [5]]]), false); // => !!!!
assertEqual(eqArrays([[2, 3], [4, [6, 7, 8]]], [[2, 3], [4, [6, 7, 8]]]), true); // =>
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // =>  !!!!
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // =>