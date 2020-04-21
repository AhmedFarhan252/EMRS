// admin.js - admin route module
const express = require("express");
const router = express.Router();
const admin_controller = require("../controllers/adminController");

// Home page route
router.get("/", (req, res) => {
  res.send("Admin home page");
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
