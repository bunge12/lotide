const without = (source, itemsToRemove) => {
  let source2 = Array.from(source);
  for (let i = 0; i < source2.length; i++) {
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source2[i] === itemsToRemove[y]) {
        source2.splice(i, 1);
      }
    }
  }
  return source2;
};

module.exports = without;
