const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

const nums = [2,3,4,5,6,7];
const results2 = map(nums, number => number * 2);

const letters = ['a','b','c','d'];
const results3 = map(letters, letter => letter + 'aaa');


assertArraysEqual(results1,['g','c','t','m','t']);
assertArraysEqual(results2, [4,6,8,10,12,14]);
assertArraysEqual(results3, ['aaaa','baaa','caaa','daaa']);