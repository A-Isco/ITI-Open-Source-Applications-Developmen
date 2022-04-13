const res = require("express/lib/response");
const { readJsonFile, writeJsonFile } = require("./fileHandler");
const path = require("path");

// get all users
const getAllUsers = () => {
  return readJsonFile("./users.json");
};

// get user
const getUserByName = (userName) => {
  return getAllUsers().find((user) => {
    if (user.username === userName) return user;
  });
};

// Register
const register = (req, res) => {
  const newUser = req.body;
  const { username } = req.body;
  let users = getAllUsers();
  let currentUser = getUserByName(username);
  if (currentUser == undefined) {
    users.push(newUser);
    writeJsonFile("./users.json", JSON.stringify(users));
    res.send({
      success: true,
      newUser,
    });
  } else {
    res.send({
      message: "user already exists",
    });
  }
};

// Login
const login = (req, res) => {
  const { username, password, email } = req.body;

  let currentUser = getUserByName(username);

  if (currentUser !== undefined && password === currentUser.password) {
    // res.send({
    //   message: `Hola ${username}`,
    // });
    res.render("profile", { userName: username });
  } else {
    res.send({
      message: "Wrong credentials",
    });
  }
};

const getHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/homepage.html"));
};

module.exports = {
  register,
  login,
  getHomePage,
};
