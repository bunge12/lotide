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

const without = function(source, itemsToRemove) {
  let source2 = Array.from(source);
  for (let i = 0; i < source2.length; i++) {
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source2[i] === itemsToRemove[y]) {
        source2.splice(i ,1);
      }
    }
  }
  return source2;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);