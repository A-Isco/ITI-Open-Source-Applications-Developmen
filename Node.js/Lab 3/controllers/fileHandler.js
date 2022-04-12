const { readFileSync, writeFileSync } = require("fs");

const readJsonFile = (fileName) => {
  try {
    return JSON.parse(readFileSync(fileName, "utf8"));
  } catch (err) {
    console.error(err);
  }
};

const writeJsonFile = (fileName, content) => {
  writeFileSync(fileName, content.toString());
};

module.exports = {
  readJsonFile,
  writeJsonFile,
};
