require("dotenv").config({ debug: process.env.DEBUG });
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

exports.registration = (req, res) => {
  const fname = req.param("fname");
  const lname = req.param("lname");
  const email = req.param("email");
  const password = req.param("password");
  const gender = req.param("gender");
  const hobbies = req.param("hobbies");
  const city = req.param("city");
  const employeeType = req.param("employeeType");


  if (!(fname && lname && password && hobbies && email && gender && city && employeeType)){
    res.json({ msg: "All fields are required" });
  }

  User.countDocuments({ email: email, password: password }, (err, c) => {
    if (c >= 1) {
      return res
        .status(200)
        .json({ msg: "Username or email address already exits" });
    } else {
      return User.create(
        {
          fname,
          lname,
          email,
          password,
          gender,
          hobbies,
          city,
          employeeType,
        },
        (err, data) => {
          if (err) {
            console.log(err);
            return res.json({ msg: false });
          } else {
            return res.json({ data, msg: true });
          }
        }
      );
    }
  });
};

exports.login = (req, res) => {
  const email = req.param("email");
  const password = req.param("password");


  // var token = jwt.sign({foo:'bar'}, 'shhhh');
  User.find({ email: email }, (err, user) => {
    if (err) {
      return res.status(200).json({ msg: "Error: Something happened" });
    }
    let data = JSON.parse(JSON.stringify(user));
    try {
      console.log(data[0].password);
    } catch (e) {
      return res.status(200).json({ msg: "User Doesn't Exits" });
    }
    if (data[0].password != password) {
      return res.status(200).send("Username or password incorrect");
    } else {
      const token = jwt.sign({ _id: data[0]._id }, process.env.SECRET_KEY);
      res.cookie("token", token, { expire: new Date() + 333 });
      return res.status(200).json({
        token,
        user: {
          fname: data[0].fname,
          lname: data[0].lname,
          email: data[0].email,
          gender: data[0].gender,
          hobbies: data[0].hobbies,
          city: data[0].city,
          employeeType: data[0].employeeType,
        },
      });
    }
  });
};

exports.allEmployeeData = (req, res) => {
  let data;
  User.find((err, docs) => {
    if (err) {
      res.send("error");
    }
    data = docs;
  });
  setTimeout(() => {
    res.status(200).json(JSON.parse(JSON.stringify(data)));
  }, 50);
};


// Save data of edited user in the database

exports.updateEmpData = async (request, response) => {
  let user = await User.find({ email: request.params.email});
  console.log("user", user);
  console.log("request", request.body);
  user = request.body;
  
  // const empEditData = new User(user);
  try {
    await User.updateOne({ email: request.params.email }, user);
    response.status(200).json({ msg: "Update Data Successfully" });
  } catch (error) {
    response.status(409).json({ msg: error.msg });
  }
};

exports.deleteUser = async (req, resp) => {
  console.log("ashish",req.params.email)
  try {
    await User.deleteOne({ email: req.params.email });
    resp.status(200).json({ msg : "Employee deleted Successfully"});
  } catch (error) {
    resp.status(409).json({ msg: error.message });
  }
};
