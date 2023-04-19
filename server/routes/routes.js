const express = require("express");

let {
  loginWithPhoneOtp ,
  verifyPhoneOtp ,
  createNewUser
} = require("../controllers/controllers.js");

let router = express.Router();
// send otp
router.post("/newuser", createNewUser );

// send otp
router.post("/sendotp", loginWithPhoneOtp );
// verify otp
router.post("/verifyotp", verifyPhoneOtp);

module.exports = router;  


