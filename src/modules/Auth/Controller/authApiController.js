// authApiController.js
const User = require("../../User/models/userSchema");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const generateToken = require("../../../services/Utils/generateToken");

const loginController = async (Model, req, res) => {
  console.log("Request Body:", req.body);

  const { email, password } = req.body;

  try {
    // Find user
    const userFound = await Model.findOne({ email });

    // If user found and password matches, generate token and respond
    if (userFound && (await bcrypt.compare(password, userFound?.password))) {
      return res.json({
        status: "success",
        message: `${Model.modelName} logged in successfully`,
        token: generateToken(userFound?._id),
        userFound,
      });
    } else {
      throw new Error("Invalid login credentials");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = loginController;
