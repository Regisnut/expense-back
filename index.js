const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

///Connection à la BDD
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reacteur-examen",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
);

// Mongoose va prendre connaissance de ces collections
require("./models/usermodel");
require("./models/operationmodel");

//activer les routes
const userRoutes = require("./routes/user");
const operationRoutes = require("./routes/operation");
app.use(userRoutes);
app.use(operationRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server has started");
});
