const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const app = express();
var cors = require("cors");
dotenv.config();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//connection

mongoose
  .connect(process.env.MongoDb_Url, {
    useNewUrlParser: true
  })
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

const userProfileSchema = new mongoose.Schema({
  email: String,
  password: String,
  FirstName: String,
  LastName: String,
  Phone: Number,
  City: String,
  ZipCode: Number,
  pet: String,
  name: String,
  breed: String,
  birthDay: String,
  Gender: String,
  neutered: String,
  weight: Number,
  vetname: String,
  vetsPhoneNo: Number,
  vetsAddress: String
});

//collection creation
const UserProfile = new mongoose.model("UserProfile", userProfileSchema);

//Service Db

const serviceSchema = new mongoose.Schema({
  email: String,
  messsage: String,
  razorPayLink: String,
  frequency: String,
  start_Date: String,
  days: Array,
  Times: Array,
  note_for_sitter: String
});

//collection creation
const Service = new mongoose.model("Service", serviceSchema);

app.get("/", async (req, res) => {
  // res.send("Api is Working");
  try {
    const dataItem = await UserProfile.find({});
    res.status(200).json({
      data: dataItem
    });
  } catch (err) {
    res.json({ data: `Some Problem with dataBase ${err}` });
  }
});

app.post("/signin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  UserProfile.findOne({ $or: [{ email: email }] }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, async function (err, result) {
        if (err) {
          res.json({
            error: err
          });
        }
        if (result) {
          // let token = jwt.sign({ name: user.FirstName }, "verySecretValue", {
          //   expiresIn: "1h"
          // });
          // res.json({
          //   message: "Login Succesful",
          //   token
          // });
          try {
            const dataItem = await UserProfile.find({ email: req.body.email });
            res.status(200).json({
              message: "success",
              data: dataItem
            });
          } catch (err) {
            res.json({ message: `Some Problem with dataBase ${err}` });
          }
          // res.json("success");
        } else {
          res.json({
            message: "Password does not matched!"
          });
        }
      });
    } else {
      res.json({
        message: "No user Found ! "
      });
    }
  });
});

app.post("/register", (req, res) => {
  bcrypt.hash(req.body.password, null, null, function (err, hash) {
    var myData = new UserProfile({
      email: req.body.email,
      password: hash,
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Phone: req.body.Phone,
      City: req.body.City,
      ZipCode: req.body.ZipCode,
      pet: req.body.pet,
      name: req.body.name,
      breed: req.body.breed,
      birthDay: req.body.birthDay,
      Gender: req.body.Gender,
      neutered: req.body.neutered,
      weight: req.body.weight,
      vetname: req.body.vetname,
      vetsPhoneNo: req.body.vetsPhoneNo,
      vetsAddress: req.body.vetsAddress
    });
    myData
      .save()
      .then((item) => {
        res.json(item);
      })
      .catch((err) => {
        res.status(400).json("unable to save to database", err);
      });
  });
});

app.post("/service", (req, res) => {
  var myService = new Service({
    email: req.body.email,
    messsage: req.body.messsage,
    razorPayLink: req.body.razorPayLink,
    frequency: req.body.frequency,
    start_Date: req.body.start_Date,
    days: req.body.days,
    Times: req.body.Times,
    note_for_sitter: req.body.note_for_sitter
  });
  myService
    .save()
    .then((item) => {
      //res.send("Recieved");
      res.json(item);
    })
    .catch((err) => {
      res.status(400).json("unable to save to database", err);
      // res.send(err);
    });
});

app.listen(process.env.PORT || 3001, () => {
  console.log("App is working on port 3001");
});
