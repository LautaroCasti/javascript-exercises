const removeFromArray = (arr, ...argsToRemove) => {
  const arrWithValuesRemoved = arr.filter((element) => {
    if (!argsToRemove.includes(element)) {
      return element;
    }
  })
  return arrWithValuesRemoved;
};

// Do not edit below this line
module.exports = removeFromArray;
