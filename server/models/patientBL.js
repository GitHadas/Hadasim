const { PatientsModel, VaccinationsModel } = require("./hmoModels");

const getPatients = async () => {

  try {
    const patients = await PatientsModel.find({});
    //const patientsWithVaccinations = await Promise.all(
    //  patients.map(async (patient) => {
    //    const vaccinations = await VaccinationsModel.find({ patient_id: patient._id });
    //    console.log("getPatients");
    //    return {
    //      patient,
    //      vaccinations,
    //    };
    //  })
    //);
    return patientsWithVaccinations;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getPatient = async (ID) => {
  try {
    const patient = await PatientsModel.findById(ID);
    if (!patient) {
      throw new Error("Patient not found");
    }
    const vaccinations = await VaccinationsModel.find({ patient_id: patient._id });
    return {
      patient,
      vaccinations,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addPatient = async (obj) => {
  try {
    const patient = new PatientsModel({
      patient_id: obj.id,
      first_name: obj.name,
      last_name: obj.lastName,
      identity_card: obj.identityCard,
      address_city: obj.city,
      address_street: obj.street,
      address_number: obj.houseNumber,
      date_of_birth: obj.birthDay,
      telephone: obj.phone,
      mobile_phone: obj.cellphone,
      positive_result_date: obj.dateOfIllness || null,
      recovery_date: obj.dateOfRecovery || null,
    });
    await patient.save();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addVaccinationToPatient = async (patientID, vaccinationDate, vaccineManufacturer) => {
  try {
    const patient = await PatientsModel.findById(patientID);
    if (!patient) {
      throw new Error("Patient not found");
    }

    const vaccination = new VaccinationsModel({
      patient_id: patientID,
      vaccine_date: vaccinationDate,
      vaccine_manufacturer: vaccineManufacturer,
    });

    await vaccination.save();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updatePatientCOVIDStatus = async (patientID, positiveResultDate, recoveryDate) => {
  try {
    const patient = await PatientsModel.findById(patientID);
    if (!patient) {
      throw new Error("Patient not found");
    }

    patient.positive_result_date = positiveResultDate || null;
    patient.recovery_date = recoveryDate || null;

    await patient.save();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = {
  getPatients,
  getPatient,
  addPatient,
  addVaccinationToPatient,
  updatePatientCOVIDStatus,
};