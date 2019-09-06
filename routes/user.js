const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const User = require("../models/usermodel");
const Operation = require("../models/operationmodel");

// **Create**
router.post("/usercreate", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username
    });
    await newUser.save();
    res.json({ message: "new user created" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// **Read**
router.get("/user", async (req, res) => {
  try {
    const users = await User.find();
    //console.log(users);
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//**Update**
// router.post("/userupdate", async (req, res) => {
//   try {
//     if (req.body.id && req.body.name) {
//       const user = await User.findOne({ _id: req.body.id });
//       user.name = req.body.name;
//       await user.save();
//       res.json({ message: "Updated" });
//     } else {
//       res.status(400).json({ message: "Missing Parameter" });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

//Update pour lier operations à User
// router.post("/updateUserOperation", async (req, res) => {
//   try {
//     const { name } = req.body;
//     const user = await User.findOne({ name }).populate("operation");
//     console.log(user);

//     if (user.operation) {
//       res.json({
//         name,
//         operation: user.operation.description,
//         operation: user.operation.price
//       });
//     }
//     res.json({
//       name
//     });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// //**DELETE */
// router.post("/userdelete", async (req, res) => {
//   try {
//     const user = await User.findById(req.body.id);
//     if (user) {
//       await user.remove();
//       res.json({ message: "Removed" });
//     } else {
//       res.status(400).json({ message: "Missing id" });
//     }
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

module.exports = router;
