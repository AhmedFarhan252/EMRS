//Contains Authentication routes
var express = require("express");
var router = express.Router();
const passport = require("passport");
const authController = require("../controllers/authController");
//Logout of authentication
router.get("/logout", (req, res) => {
  //handle with Passport
  req.logout();
  res.redirect("http://localhost:3000/");
});

// Authentication with Google
router.get("/google", passport.authenticate("google", { scope: ["email"] }));

//Successful authentication with Google
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  const role = req.user.role;

  if (role === "patient") {
    authController.verifyRegistration(req, res).then((isRegistered) => {
      if (isRegistered) {
        res.redirect("http://localhost:3000/patient/profile");
      } else {
        res.redirect("http://localhost:3000/newprofile");
      }
    });
  } else if (role === "doctor") {
    res.redirect("http://localhost:3000/doctor");
  } else if (role === "admin") {
    res.redirect("http://localhost:3000/admin");
  } else {
    console.log("ERROR: UNKNOWN ROLE TYPE");
    res.redirect("http://localhost:3000");
  }
});

// Authentication with Facebook
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

//Successful authentication with Facebook
router.get(
  "/facebook/redirect",
  passport.authenticate("facebook"),
  (req, res) => {
    const role = req.user.role;

    if (role === "patient") {
      res.redirect("http://localhost:3000/patient/");
    } else if (role === "doctor") {
      res.redirect("http://localhost:3000/doctor/");
    } else if (role === "admin") {
      res.redirect("http://localhost:3000/admin/");
    } else {
      console.log("ERROR: UNKNOWN ROLE TYPE");
      res.redirect("http://localhost:3000");
    }
  }
);

module.exports = router;
