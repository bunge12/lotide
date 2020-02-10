const assertEqual = require('./assertEqual');

const head = (array) => {
  return array[0];
};

assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hell", "Lighthouse", "Labs"]), "Hello");