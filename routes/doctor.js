// doctor.js - Doctor route module
const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

//Add table id from doctor table to req.
router.use((req, res, next) => {
  doctorController.addTableId(req, res, next);
});

// Profile page route
router.get("/profile", (req, res) => {
  doctorController.getProfile(req, res);
});

// Edit profile route
router.post("/profile", (req, res) => {
  doctorController.editProfile(req, res);
});

// Single record route
router.post("/records", (req, res) => {
  doctorController.singleRecord(req, res);
});

// Doctor's Record page route
router.post("/recordsList", (req, res) => {
  doctorController.getRecords(req, res);
});

// Record download route
router.post("/recorddownload", (req, res) => {
  doctorController.recDown(req, res);
});

// New Record page route
router.post("/patientslist", (req, res) => {
  doctorController.getPatients(req, res);
});

// Get Record info route
router.post("/recordinfo", (req, res) => {
  doctorController.getRecordInfo(req, res);
});

// New record information route
router.post("/newrecord", (req, res) => {
  doctorController.createRecord(req, res);
});

// Visualization route
router.get("/visualization", (req, res) => {
  doctorController.getDiseaseStats(req, res);
});

// Visualization date set route
router.post("/visualization", (req, res) => {
  doctorController.setDiseaseStat(req, res);
});

// Office hours route
router.get("/timings/:id", (req, res) => {
  doctorController.getTimings(req, res);
});

// Office hours add remove route
router.post("/timings", (req, res) => {
  doctorController.editTimings(req, res);
});

module.exports = router;
