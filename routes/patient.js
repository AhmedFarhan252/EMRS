// patient.js - Patient route module
const express = require("express");
const router = express.Router();

// Home page route
router.get("/", (req, res) => {
  res.send("Patient home page");
});

// New account route
router.post("/new", (req, res) => {
  res.send("Create new acocunt");
});

// Profile page route
router.get("/profile", (req, res) => {
  res.send("Load patient profile ");
});

// Edit profile route
router.post("/profile", (req, res) => {
  res.send("Edit patient profile ");
});

// Record page route
router.get("/records", (req, res) => {
  res.send("Records page");
});

// Single record route
router.post("/records", (req, res) => {
  res.send("Show single record");
});

// Appointments route
router.post("/appointment", (req, res) => {
  res.send("Appointments page");
});

module.exports = router;
