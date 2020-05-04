// patient.js - Patient route module
const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");
const db = require("../db/dbConnector");

//Add table id from patient table to req.
router.use((req, res, next) => {
  const { id, role } = req.user;
  let tid = -1;
  if (role === "patient") {
    db.oneOrNone(
      "select patient.id from patient,login where login.id=$1 and login.email = patient.email;",
      [id]
    ).then((data) => {
      if (data) {
        tid = data.id;

        const user_data = {
          id: id,
          role: "patient",
          tid: tid,
        };
        req.user = user_data;
        next();
      } else {
        next();
      }
    });
  }
});

// New account route
router.post("/new", (req, res) => {
  patientController.newAccount(req, res);
});

// Profile page route
router.get("/profile", (req, res) => {
  patientController.getProfile(req, res);
});

// Edit profile route
router.post("/profile", (req, res) => {
  patientController.updateProfile(req, res);
});

// Single record route
router.post("/records", (req, res) => {
  patientController.singleRecord(req, res);
});

// Record page route
router.post("/recordslist", (req, res) => {
  patientController.getRecords(req, res);
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
