//Contains Authentication routes
var express = require("express");
var router = express.Router();
const passport = require("passport");
const authController = require("../controllers/authController");

//Logout of authentication
router.get("/logout", (req, res) => {
  authController.logout(req, res);
});

// Authentication with Google
router.get("/google", passport.authenticate("google", { scope: ["email"] }));

//Successful authentication with Google
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  authController.googleRedirect(req, res);
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
    authController.facebookRedirect(req, res);
  }
);

//Authenticate patient session
router.get("/patient", (req, res) => {
  authController.authPatient(req, res);
});

//Authenticate doctor session
router.get("/doctor", (req, res) => {
  authController.authDoctor(req, res);
});

module.exports = router;
