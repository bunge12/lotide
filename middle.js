const middle = (array) => {
  let result = [];
  const length = array.length;
  const midIndex = Math.floor(length / 2);
  if (length <= 2) {
    return result;
  } else if (length % 2 === 0) {
    result = array.slice(midIndex - 1, midIndex + 1);
  } else {
    result = array.slice(midIndex, midIndex + 1);
  }
  return result;
};

module.exports = middle;