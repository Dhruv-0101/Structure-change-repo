// routes.js
const express = require("express");
const registerUserCtrl = require("../userRepository/userRepo");

const userRouter = express.Router();

userRouter.post("/register", registerUserCtrl);

module.exports = userRouter;
