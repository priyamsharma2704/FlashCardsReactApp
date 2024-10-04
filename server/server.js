const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.json({"data": 1234});
})

mongoose
  .connect(
    "mongodb+srv://psharma:psharma@cluster0.xvu7n8e.mongodb.net/FlashCards"
  )
  .then(() => {
    console.log("Connected to MongoDB now");
  })
  .catch((err) => {
    console.log(err);
  });

const appsSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const appsModel = mongoose.model("card", appsSchema);
appsModel
.find()
.then((data) => {
  console.log(data);
})
.catch((err) => console.log(err));

app.listen(5000, ()=>{
    console.log("Server started at 5000");
})