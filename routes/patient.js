// patient.js - Patient route module
const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");
const db = require("../db/dbConnector");

// // Authentication check middleware: Checks if user is authorized
// router.use((req, res, next) => {
//   console.log("patient authcheck");
//   if (!req.user) {
//     //User not logged in
//     res.redirect("http://localhost:3000/");
//   } else {
//     //Check user role
//     if (req.user.role === "patient") {
//       next();
//     } else {
//       //Unauthorized so redirect
//       res.redirect("http://localhost:3000/");
//     }
//   }
// });

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
