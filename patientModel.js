const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  // Define your patient schema fields based on the requirements
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;