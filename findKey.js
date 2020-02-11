const findKey = (objects, callback) => {
  for (let object of Object.keys(objects)) {
    if (callback(objects[object])) {
      return object;
    }
  }
};
module.exports = findKey;