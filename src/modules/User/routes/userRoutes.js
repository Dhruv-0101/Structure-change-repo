// routes.js
const express = require("express");
const { registerUserCtrl } = require("../controllers/userApiController");

const userRouter = express.Router();

userRouter.post("/register", registerUserCtrl);

module.exports = userRouter;
