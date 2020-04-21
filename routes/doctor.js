// doctor.js - Doctor route module
const express = require("express");
const router = express.Router();

// Home page route
router.get("/", (req, res) => {
  res.send("Doctor home page");
});

// Profile page route
router.get("/profile", (req, res) => {
  res.send("Load doctor profile ");
});

// Edit profile route
router.post("/profile", (req, res) => {
  res.send("Edit doctor profile ");
});

// Record page route
router.get("/records", (req, res) => {
  res.send("Records page");
});

// Single record route
router.post("/records", (req, res) => {
  res.send("Show single record");
});

// Record download route
router.post("/recorddownload", (req, res) => {
  res.send("Download selected record");
});

// New Record page route
router.get("/newrecord", (req, res) => {
  res.send("Add Records page");
});

// New record information route
router.post("/newrecord", (req, res) => {
  res.send("Enter record information");
});

// Visualization route
router.get("/visualization", (req, res) => {
  res.send("Visualization page");
});

// Visualization date set route
router.post("/visualization", (req, res) => {
  res.send("Change visualization settings page");
});

// Office hours route
router.get("/timings", (req, res) => {
  res.send("Office hours page");
});

// Office hours add remove route
router.post("/timings", (req, res) => {
  res.send("Add / drop office hours page");
});

module.exports = router;
