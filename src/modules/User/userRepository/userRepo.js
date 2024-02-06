const User = require("../models/userSchema");
const registerCtrl = require("../controllers/userApiController");
const AsyncHandler = require("express-async-handler");

const registerUserCtrl = AsyncHandler(async (req, res) => {
  await registerCtrl(User, req, res);
});
module.exports = registerUserCtrl;
