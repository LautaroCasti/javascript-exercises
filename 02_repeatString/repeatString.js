const repeatString = (input, timesToRepeat) => {
  let inputAltered = input;
  if (timesToRepeat < 0) {
    return "ERROR";
  }
  if (timesToRepeat === 0) {
    return "";
  }
  for (let i = 0; i < timesToRepeat - 1; i++) {
    inputAltered += input;
  }
  return inputAltered;
};

// Do not edit below this line
module.exports = repeatString;
