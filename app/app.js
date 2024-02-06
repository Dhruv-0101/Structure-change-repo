const express = require("express");
const userRouter = require("../src/modules/User/routes/userRoutes");
const authRouter = require("../src/modules/Auth/routes/authRoutes");
const app = express();
//Middlewares
app.use(express.json()); // Add this line to parse JSON bodies
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);


module.exports = app;
