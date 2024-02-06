// authApiController.js
const User = require("../../User/models/userSchema");
const loginController = require("../Controller/authApiController");
const AsyncHandler = require("express-async-handler");

const loginUserCtrl = AsyncHandler(async (req, res) => {
  await loginController(User, req, res);
});

module.exports = loginUserCtrl;
