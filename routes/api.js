const Business = require("../models/Business");
const User = require("../models/User");
const router = require("express").Router();
const express = require("express");
const passport = require("../config/passport");



router.get("/profile/:id", (req, res) => {
  res.json({
    error: "Not Implemented"
  })
});

// new profile
router.post("/profile", (req, res) => {
  const newBusiness = req.body;
  Business
    .create(newBusiness)
    .then((business, err) => {
      if (err) return res.json({ error: err })
      // TODO: add business to user
      return res.json({ profile: business })
    });
});

//new user
router.post("/", (req, res) => {
  const {username, email, password} = req.body
  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log(err)
    } else if (user) {
      res.json(`${username} already exists`)
    } else {
      const newUser = new User({
        username: username,
        email: email,
        password: password
      })
      console.log(newUser, "new user")
      newUser.save((err, savedUser) => {
        if (err) return res.json(err)
        console.log("saved user")
        res.json(savedUser)
    })
    }
  })
})

router.post(
  "/login", 
  passport.authenticate("local", {failureRedirect: "/login"}),
  function (req, res, next) {    
      console.log("logged in", req.user);
      userInfo = {
          username: req.user.username
      };
      res.send(userInfo);
      next();
  }
)

// router.post("/login", passport.authenticate("local", {}), function (_req, res) {
//   console.log(req.bogy, "here")
//   res.sendStatus(204)
// }
  
// (req, res, next) => {
//   console.log(req.body, "here");
//   next();
// }, 
//   passport.authenticate("local"), (req, res) => {
//     console.log("logged in")
//     res.sendStatus(204)
//   }
// )


// edit profile
router.put("/profile/:id", (req, res) => {
  res.json({
    error: "Not Implemented"
  })
});

router.get("/profiles", (req, res) => {
  Business
    .find().exec()
    .then((profiles, err) => {
      if (err !== undefined) {
        return res.json({
          error: err
        })
      }
      if (profiles === undefined || profiles.length < 1) {
        return res.json({
          error: "No businesses found"
        })
      }
      res.json({
        profiles: profiles
      })
    })
    .catch(err => res.json({ error: err })
    )
});

module.exports = router;
