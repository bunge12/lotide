const countLetters = (string) => {
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

module.exports = countLetters;

// countLetters("lighthouse in the house");
// countLetters("bootcamp");