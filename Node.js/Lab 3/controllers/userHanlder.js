const { readJsonFile, writeJsonFile } = require("./fileHandler");

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
const register = (newUser) => {
  let users = getAllUsers();
  let currentUser = getUserByName(newUser.username);
  if (currentUser == undefined) {
    users.push(newUser);
    writeJsonFile("./users.json", JSON.stringify(users));
    return {
      success: true,
      newUser,
    };
  } else {
    return {
      message: "user already exists",
    };
  }
};

// Login
const login = (user) => {
  let currentUser = getUserByName(user.username);
  if (currentUser !== null && user.password === currentUser.password)
    return {
      success: true,
      message: `Hola ${user.username}`,
    };
  return {
    success: false,
    message: "Wrong credentials",
  };
};

module.exports = {
  register,
  login,
};
