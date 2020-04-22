// patient.js - Patient route module
const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");

// Home page route
router.get("/", (req, res) => {
  res.send("Patient home page");
});

// New account route
router.post("/new", (req, res) => {
  patientController.newAccount(req, res);
});

// Profile page route
router.get("/profile/:id", (req, res) => {
  patientController.getProfile(req, res);
});

// Edit profile route
router.post("/profile", (req, res) => {
  patientController.updateProfile(req, res);
});

// Record page route
router.get("/records/:id", (req, res) => {
  patientController.getRecords(req, res);
});

// Single record route
router.post("/records", (req, res) => {
  patientController.singleRecord(req, res);
});

// Appointments route
router.get("/appointment/:id", (req, res) => {
  res.send("Appointments page");
});

// Make appointment selection
router.post("/appointment", (req, res) => {
  res.send("Appointment selection");
});

module.exports = router;
