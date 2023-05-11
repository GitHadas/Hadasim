const mongoose = require("mongoose");

// Define Patients schema
const PatientsSchema = new mongoose.Schema({
  patient_id: {
    type: String,
    unique: true,
    required: true
  },
  first_name: String,
  last_name: String,
  identity_card: String,
  address_city: String,
  address_street: String,
  address_number: String,
  date_of_birth: Date,
  telephone: String,
  mobile_phone: String,
  positive_result_date: Date,
  recovery_date: Date
});

// Define Vaccinations schema
const VaccinationsSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patients",
    required: true,
  },
  vaccine_date: Date,
  vaccine_manufacturer: String
});

// Create models based on the defined schemas
const PatientsModel = mongoose.model("Patients", PatientsSchema);
const VaccinationsModel = mongoose.model("Vaccinations", VaccinationsSchema);

// Export the models
module.exports = {
  PatientsModel,
  VaccinationsModel
};