const fast2sms = require("fast-two-sms");

exports.generateOTP = (otp_length) => {
  // Declare a digits variable
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < otp_length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

exports.fast2sms = async ({ message, contactNumber }, next) => {
  try {
    const res = await fast2sms.sendMessage({
      authorization: process.env.FAST2SMS,
      message,
      numbers: [contactNumber],
    });
    console.log("from util",res, message, contactNumber);
  } catch (error) {
    next(error);
  }
};