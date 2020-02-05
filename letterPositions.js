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

const letterPositions = function(sentence) {
  let result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] in result) {
      result[sentence[i]].push(i);
    } else {
      result[sentence[i]] = [i];
    }
  }
  console.log(result);
  return result;
};

letterPositions("lighthouse in the house");

assertArraysEqual(letterPositions("hello").e, [1]);
