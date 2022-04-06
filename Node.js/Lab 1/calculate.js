const addNumbers = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return " num1 and num2 should be numbers";
  }
  return num1 + num2;
};

const subNumbers = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return " num1 and num2 should be numbers";
  }
  return num1 - num2;
};

const multiplyNumbers = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return " num1 and num2 should be numbers";
  }
  return num1 * num2;
};

module.exports = { addNumbers, subNumbers, multiplyNumbers };
