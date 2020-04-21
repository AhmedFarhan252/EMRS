// admin.js - admin route module
const express = require("express");
const router = express.Router();

// Home page route
router.get("/", (req, res) => {
  res.send("Admin home page");
});

// Account management route
router.get("/accounts/:id", (req, res) => {
  res.send("Accounts menu");
});

// new account route
router.post("/accounts", (req, res) => {
  res.send("Create new account");
});

// delete account route
router.post("/delaccount", (req, res) => {
  res.send("Delete selected account");
});

// Disease route
router.get("/disease/:id", (req, res) => {
  res.send("Disease menu");
});

// Disease add route
router.post("/disease", (req, res) => {
  res.send("Add Disease ");
});

module.exports = router;
