// routes.js
const express = require("express");
const loginUserCtrl = require("../authRepository/authRepo"); // Update the path

const authRouter = express.Router();

authRouter.post("/login", loginUserCtrl);

module.exports = authRouter;
