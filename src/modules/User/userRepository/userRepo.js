/*const User = require("../models/userSchema");
const hashPassword = require("../../../services/Utils/helpers");

async function registerUser(name, email, password) {
  // Check if email exists
  const userFound = await User.findOne({ email });
  if (userFound) {
    throw new Error("User Exists");
  }

  // Register
  const newUser = await User.create({
    name,
    email,
    password: await hashPassword(password),
  });

  return newUser;
}

module.exports = { registerUser };*/
const User = require("../models/userSchema");
const { hashPassword } = require("../../../services/Utils/helpers"); // Fix the import

async function registerUser(name, email, password) {
  // Check if email exists
  const userFound = await User.findOne({ email });
  if (userFound) {
    throw new Error("User Exists");
  }

  // Register
  const newUser = await User.create({
    name,
    email,
    password: await hashPassword(password),
  });

  return newUser;
}

module.exports = { registerUser };

