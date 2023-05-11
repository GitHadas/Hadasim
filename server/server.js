const express = require("express");
const app = express();
require("./configs/database");
const PatientRouter = require("./routes/patientRouter");
const mongoose = require("mongoose")

app.use(express.json());

mongoose.connect("mongodb+srv://motih9646:cns7t2Votwv6uTvB@cluster0.0ryywzl.mongodb.net/?retryWrites=true&w=majority",
  //mongodb+srv://itimitzma:im2002@cluster0.m7ehlwl.mongodb.net/
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB111');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });
app.use(express.urlencoded({ extended: false }));
app.use("/api/patients", PatientRouter);

app.listen(5000, () => {
  console.log("Listening on port 5000 :)");
});