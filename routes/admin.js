// admin.js - admin route module
const express = require("express");
const router = express.Router();
const admin_controller = require("../controllers/adminController");

// Authentication check middleware
router.use((req, res, next) => {
  console.log("auth middleware");
  if (!req.user) {
    //User not logged in
    res.redirect("http://localhost:3000/");
  } else {
    //Check user role
    if (user.role === "admin") {
      next();
    } else {
      //Unauthorized so redirect
      res.redirect("http://localhost:3000/");
    }
  }
});

// Account management route
router.get("/accounts", (req, res) => {
  admin_controller.getAccount(req, res);
});

// new account route
router.post("/accounts", (req, res) => {
  admin_controller.newAccount(req, res);
});

// delete account route
router.post("/delaccount", (req, res) => {
  admin_controller.delAccount(req, res);
});

// Disease route
router.get("/disease", (req, res) => {
  admin_controller.getDisease(req, res);
});

// Disease add route
router.post("/disease", (req, res) => {
  admin_controller.addDisease(req, res);
});

module.exports = router;
