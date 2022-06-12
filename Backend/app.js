const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://admin:YbXYGNZyl7oMlfCU@cluster0.q7dle.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to the database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
