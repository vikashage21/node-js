const express = require("express");

const router = new express.Router();

const UserRegistration = require("../modles/registration");

// getting request for signup pages

router.get("/signup", (req, res) => {
  res.render("signup");
});

// getting request for login page
router.get("/login", (req, res) => {
  res.render("login");
});

// getting all data form database

router.get("/user", async (req, res) => {
    try {
      const user = await UserRegistration.find();
      res.send(user);
    } catch (e) {
      console.log(e);
    }
  });
// post request for signup page

router.post("/signup", async (req, res) => {
  try {
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      confirm_password: req.body.confirm_password,
      age: req.body.age,
    };

    if (data.password !== data.confirm_password) {
      res.send("invalid confirm password");
    } else {
      const user = await UserRegistration.insertMany([data]);

      res.render("login");
    }
  } catch (e) {
    console.log(e);
  }
});

  // login page post method

  router.post("/login", async (req, res) => {
    try {
      const user = await UserRegistration.findOne({ email: req.body.email });

      if (user.password == req.body.password) {
        res.render("home");
      } else {
        res.send("Enter valid Email and Password");
      }
    } catch (e) {
      console.log(e);
    }
  });

  

module.exports = router;
