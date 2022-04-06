const calculateAge = (name, birthYear) => {
  if (birthYear === 2020) {
    return " birthyear not accepted";
  }
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let age = currentYear - birthYear;
  return `Hello ${name} , Your age now is ${age}`;
};

module.exports = { calculateAge };
