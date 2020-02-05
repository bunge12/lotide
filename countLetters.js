const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let noSpaces = string.split(" ").join("").toLowerCase();
  let result = {};
  for (let i = 0; i < noSpaces.length; i++) {
    if (noSpaces[i] in result) {
      result[noSpaces[i]] += 1;
    } else {
      result[noSpaces[i]] = 1;
    }
  }
  return result;
};

countLetters("lighthouse in the house");
countLetters("bootcamp");