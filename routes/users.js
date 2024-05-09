const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const { checkBody } = require("../modules/checkBody");

const User = require("../models/users");

router.post("/signup", (req, res) => {
  if (!checkBody(req.body, ["name", "email", "password"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return; // design pattern = cook fail,
  }
  User.findOne({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }).then((data) => {
    if (data === null) {
      // user is not registered
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      newUser.save().then(() => res.json({ result: true }));
    } else {
      res.json({ result: false, error: "User already exists" });
    }
  });
}); // router.post

router.post("/signin", (req, res) => {
  if (!checkBody(req.body, ["email", "password"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  User.findOne({ email: req.body.email, password: req.body.password }).then(
    (data) => {
      if (!data) {
        res.json({ result: false, error: "User not found" });
      } else {
        res.json({ result: true });
      }
    }
  );
});

module.exports = router;
