const express = require("express");
const router = express.Router();
const PatientBL = require("../models/patientBL");

router.get("/", async function (req, res) {
  console.log("routerget");
  let data = await PatientBL.getPatients();
  return res.status(200).json(data);
});

router.get("/:id", async function (req, res) {
  let id = req.params.id;
  let data = await PatientBL.getPatient(id);
  return res.status(200).json(data);
});

router.post("/", async function (req, res) {
  let data = await PatientBL.addPatient(req.body);
  return res.status(200).json(data);
});

router.put("/:id/vaccinations", async function (req, res) {
  let id = req.params.id;
  let vaccination = req.body;
  let data = await PatientBL.addVaccinationToPatient(id, vaccination);
  return res.status(200).json(data);
});

router.put("/:id/covid-test", async function (req, res) {
  let id = req.params.id;
  let { positiveResultDate, recoveryDate } = req.body;
  let data = await PatientBL.updateCOVIDTest(id, positiveResultDate, recoveryDate);
  return res.status(200).json(data);
});

module.exports = router;