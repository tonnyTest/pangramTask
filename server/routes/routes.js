const express = require("express");

let {
  registration,
  login,
  allEmployeeData,
  deleteUser,
  updateEmpData,
} = require("../controllers/controllers.js");

let router = express.Router();

router.post("/signup", registration);
router.post("/login", login);
router.get("/allEmployeeData", allEmployeeData);
router.delete("/deleteEmployee/:email", deleteUser);
router.put("/updateEmpData/:email", updateEmpData);

module.exports = router;
