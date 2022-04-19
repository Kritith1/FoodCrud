const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routes/foodRoutes.js");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://kritithapa:helloworld@mongocrud.8nyhg.mongodb.net/Food?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

app.use(foodRouter);

app.listen(4000, () => {
  console.log("Server is running...");
});
