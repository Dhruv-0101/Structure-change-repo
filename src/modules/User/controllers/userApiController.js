// userController.js

const { registerUser } = require("../userRepository/userRepo");
const AysncHandler = require("express-async-handler");

exports.registerUserCtrl = AysncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await registerUser(name, email, password);

    res.status(201).json({
      status: "success",
      data: user,
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
});
