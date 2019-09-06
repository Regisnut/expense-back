const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const Operation = require("../models/operationmodel");
const User = require("../models/usermodel");

// **CREATE**
router.post("/operationcreate", async (req, res) => {
  try {
    const newOperation = new Operation({
      description: req.body.description,
      price: req.body.price,
      user: req.body.user //avec "user":"n°ID"
    });
    await newOperation.save();
    res.json({ message: "operation created" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// **Read**
router.get("/operation", async (req, res) => {
  try {
    const operations = await Operation.find().populate("user");
    res.json(operations);
  } catch (error) {
    res.status(400).json({
      error: { message: "An error has occured" }
    });
  }
});

//**Update */
router.post("/operationupdate", async (req, res) => {
  try {
    const newOperation = await Operation.findOne({ name: req.body.name });
    if (newOperation) {
      newOperation.description = req.body.description;
      newOperation.price = req.body.price;
      newOperation.user = req.body.user;

      await newOperation.save();
      res.json(newOperation);
    } else {
      res.status(400).json({
        message: "newOperation not found"
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

module.exports = router;
