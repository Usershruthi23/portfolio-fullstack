const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const contactRoutes = require("./routes/contactRoutes");

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

mongoose.connect(process.env.MONGO_URI)
.then(() => {

  console.log("MongoDB Connected");

  app.listen(process.env.PORT || 5000, () => {

    console.log("Server running on port 5000");

  });

})
.catch((error) => {

  console.log(error);

});