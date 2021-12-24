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

app.listen(3001, () => {
  console.log("App is working on port 3001");
});

// --> /signin --> Post = sucess/failure
// --> /register --> Post = user
// --> /Profile/:userId --> Get = user
