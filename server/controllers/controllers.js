require("dotenv").config({ debug: process.env.DEBUG });
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

const Otp = require("../models/userOtp.js");
const User = require("../models/user.js");


const { generateOTP, fast2sms } = require("../utils/otp.js");

const mongoose = require("mongoose");

// ------------ login with phoneNumber otp ----------------------------------

exports.loginWithPhoneOtp = async (req, res, next) => {
  try {
    const { phoneNumber } = req.body;
    let user
    user = await User.findOne({ phoneNumber });
    console.log("num ", req.body)

    if (!user) {
      // create new user
      const createUser = new User({
        phoneNumber,
        // name
      });

      // save user
      user = await createUser.save();
      console.log("ahjjhahvhjav", user)
    }

    res.status(201).json({
      type: "success",
      message: "OTP sended to your registered phoneNumber number",
      data: {
        userId: user._id,
      },
    });

    // generate otp
    const otp = generateOTP(6);
    // save otp to user collection

    const queryObject = { _id: user._id };
    const updateObject = {
      otp: otp
    };

    await User.findByIdAndUpdate(queryObject, updateObject);

    const smsRes = await fast2sms(
      {
        message: `Your OTP is ${otp}`,
        contactNumber: user.phoneNumber,
      },
      next
    );
    console.log("smsRes", smsRes)
  } catch (error) {
    // next(error);
    console.log(error)
  }
};


// ---------------------- verify phoneNumber otp -------------------------

exports.verifyPhoneOtp = async (req, res, next) => {
  try {
    const { otp } = req.body;
    const { userId } = req.body;

    console.log("verify", otp, userId);
    const user = await User.findById(userId);
    if (!user) {
      next({ status: 400, message: "USER_NOT_FOUND_ERR" });
      return;
    }

    if (user.otp !== otp) {
      next({ status: 400, message: "INCORRECT_OTP_ERR" });
      return;
    }

    if (user.otp === otp) {

      res.status(200).json({
        type: "success",
        message: "OTP verified successfully",
        data: {
          // token,
          userId: user._id,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};


exports.createNewUser = async (req, res, next) => {
  try {
    let { phoneNumber } = req.body;
    // check duplicate phoneNumber Number
    const phoneExist = await User.findOne({ phoneNumber });

    if (phoneExist) {
      next({ status: 400, message: PHONE_ALREADY_EXISTS_ERR });
      return;
    }
    // create new user
    const createUser = new User({
      phoneNumber,
      // name
    });

    // save user
    const user = await createUser.save();

    res.status(200).json({
      type: "success",
      message: "Account created OTP sended to mobile number",
      data: {
        userId: user._id,
      },
    });

    // generate otp
    const otp = generateOTP(6);
    // save otp to user collection
    user.phoneOtp = otp;
    await user.save();
    // send otp to phoneNumber number
    await fast2sms(
      {
        message: `Your OTP is ${otp}`,
        contactNumber: user.phoneNumber,
      },
      next
    );
  } catch (error) {
    console.log(error);
  }
};

