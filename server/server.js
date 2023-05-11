const express = require("express");
const app = express();
const PatientRouter = require("./routes/patientRouter");
const mongoose = require("mongoose")

app.use(express.json());

mongoose.connect("mongodb+srv://admin:SJixOMWo2WtPbnYp@cluster0.euncorb.mongodb.net/?retryWrites=true&w=majority",
  //mongodb+srv://itimitzma:im2002@cluster0.m7ehlwl.mongodb.net/
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(5000, () => {
      console.log("Listening on port 5000 :)");
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });
app.use(express.urlencoded({ extended: false }));
app.use("/api/patients", PatientRouter);