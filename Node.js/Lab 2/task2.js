let fs = require("fs");
let Path = require("path");

var readfile = fs.createReadStream("./greet.txt", {
  encoding: "utf8",
  highWaterMark: 35 * 1025,
});

readfile.on("data", function (chunk) {
  const lines = chunk.split(/\r?\n/);
  lines.forEach((element) => {
    console.log(element);
  });
});

// Rename File
const oldPath = Path.join("./info.txt");
const newPath = Path.join("./mohamed.txt ");

fs.renameSync(oldPath, newPath);

// Delete File
fs.unlink("./file.txt", (err) => {
  if (err) {
    throw err;
  }

  console.log("File is deleted.");
});

var readfile = fs.createReadStream("./data.json", {
  encoding: "utf8",
  highWaterMark: 32 * 1024,
});

readfile.on("data", function (chunk) {
  console.log(JSON.parse(chunk));
});

let content = fs.readFileSync("./data.json", "utf8");
console.log(JSON.parse(content));

// Write into file
var wrtieable = fs.createWriteStream("info.txt");
wrtieable.write("hello iti");

// Create Directory
fs.mkdir("./bonus", (err) => {
  if (err) {
    throw err;
  }
  console.log("Directory is created.");
});
