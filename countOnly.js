const countOnly = function (allItems, itemsToCount) {
  let result = {};
  for (let item in itemsToCount) {
    result[item] = 0;
    if (itemsToCount[item] === true) {
      for (let i = 0; i < allItems.length; i++) {
        if (item === allItems[i]) {
          result[item] += 1;
        }
      }
    }
  }
  for (let found in result) {
    if (result[found] === 0) {
      delete result[found];
    }
  }
  return result;
};

module.exports = countOnly;

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);