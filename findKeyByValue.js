const findKeyByValue = (list, value) => {
  let key = Object.keys(list).find(key => list[key] === value);
  return key;
};

module.exports = findKeyByValue;