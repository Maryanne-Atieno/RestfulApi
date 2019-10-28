const express = require("express");
const signupschema = require("../model/signup");
const router = express.Router();

//NEW USER SIGN UP
router.post("/", async (req, res) => {
  const sign = new signupschema({
    email: req.body.email,
    password: req.body.password
  });
  try {
    const save = await sign.save();
    res.json(save);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

//DISPLAY NEW USERS
router.get("/", async (req, res) => {
  try {
    const users = await signupschema.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
