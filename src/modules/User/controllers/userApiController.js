const bcrypt = require("bcrypt");

const registerCtrl = async (Model, req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user exists
    const userExists = await Model.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user
    const user = await Model.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      status: "success",
      message: "User Registered Successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = registerCtrl;
