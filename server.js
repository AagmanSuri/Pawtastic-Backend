const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const database = {
  users: [
    {
      email: "aagman@gmail.com",
      password: "aagman",
      FirstName: "Aagman",
      LastName: "Suri",
      Phone: "08899261987",
      City: "Jammu",
      ZipCode: "180005",
      pet: "Cat",
      name: "tyson",
      breed: "spitz",
      birthDay: "2021-12-01",
      Gender: "Male",
      neutered: "no",
      weight: 7,
      vetname: "suneet",
      vetsPhoneNo: 12345678,
      vetsAddress: "asdfghjkl;"
    },
    {
      email: "aditya@gmail.com",
      password: "aditya",
      FirstName: "Aditya",
      LastName: "Bhalaghare",
      Phone: "08899261987",
      City: "Pune",
      ZipCode: "400077",
      pet: "Cat",
      name: "tyson",
      breed: "spitz",
      birthDay: "2021-12-01",
      Gender: "Male",
      neutered: "no",
      weight: 7,
      vetname: "suneet",
      vetsPhoneNo: 12345678,
      vetsAddress: "asdfghjkl;"
    }
  ]
};

app.get("/", (req, res) => {
  res.send("This is working");
});

app.post("/signin", (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json("success");
  } else {
    res.status(400).json("Error logging in");
  }
});

app.post("/register", (req, res) => {
  database.users.push({
    email: req.body.email,
    password: req.body.password,
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
  res.json(database.users[database.users.length - 1]);
});


app.listen(3001, () => {
  console.log("App is working on port 3001");
});

// --> /signin --> Post = sucess/failure
// --> /register --> Post = user
// --> /Profile/:userId --> Get = user
