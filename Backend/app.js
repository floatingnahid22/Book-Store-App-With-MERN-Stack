const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");

const app = express();

//middlewares
app.use(express.json());
app.use("/books", router); //localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://admin:YbXYGNZyl7oMlfCU@cluster0.q7dle.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to the database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
