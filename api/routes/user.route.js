const express = require("express");
const User = require("../models/user.model");

const router = express.Router();

//Create a user
router.post("/register", async (req, res) => {
  await User(req.body).save();
  res.status(200).send("User created successfully!");
});

//Get all users
router.get("/getusers", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

//Get a user
router.get("/getusers/:id", async (req, res) => {
  const user = await User.findById({ _id: req.params.id });
  res.send(user);
});

//User login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email, password: password });
    if (user) {
      const temp = {
        name: user.name,
        email: user.email,
        isadmin: user.isadmin,
        _id: user._id,
      };
      console.log(user);
      res.send(temp);
    } else {
      return res.status(400).json({ message: "Login Failed" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
});

//Update a user
router.put("/updateusers/:id", async (req, res) => {
  await User.findByIdAndUpdate({ _id: req.params.id }, req.body);
  res.status(200).send("Updated successfully!");
});

//Delete user
router.delete("/deleteuser/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("Updated successfully!");
});

module.exports = router;
