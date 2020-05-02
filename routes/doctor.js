// doctor.js - Doctor route module
const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

// Authentication check middleware
const authCheck = (req, res, next) => {
  if (!req.user) {
    //User not logged in
    res.redirect("http://localhost:3000/");
  } else {
    //Check user role
    if (user.role === "doctor") {
      next();
    } else {
      //Unauthorized so redirect
      res.redirect("http://localhost:3000/");
    }
  }
};

// Profile page route
router.get("/profile/:id", authCheck, (req, res) => {
  doctorController.getProfile(req, res);
});

// Edit profile route
router.post("/profile", authCheck, (req, res) => {
  doctorController.editProfile(req, res);
});

// Doctor's Record page route
router.get("/records/:id", authCheck, (req, res) => {
  doctorController.getRecords(req, res);
});

// Single record route
router.post("/records", authCheck, (req, res) => {
  doctorController.singleRecord(req, res);
});

// Record download route
router.post("/recorddownload", authCheck, (req, res) => {
  doctorController.recDown(req, res);
});

// New Record page route
router.get("/newrecord", authCheck, (req, res) => {
  doctorController.getPatients(req, res);
});

// Get Record info route
router.post("/RecordInfo", authCheck, (req, res) => {
  doctorController.getRecordInfo(req, res);
});

// New record information route
router.post("/newrecord", authCheck, (req, res) => {
  doctorController.createRecord(req, res);
});

// Visualization route
router.get("/visualization", authCheck, (req, res) => {
  doctorController.getDiseaseStats(req, res);
});

// Visualization date set route
router.post("/visualization", authCheck, (req, res) => {
  doctorController.setDiseaseStat(req, res);
});

// Office hours route
router.get("/timings/:id", authCheck, (req, res) => {
  doctorController.getTimings(req, res);
});

// Office hours add remove route
router.post("/timings", authCheck, (req, res) => {
  doctorController.editTimings(req, res);
});

module.exports = router;
