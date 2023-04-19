const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
    
    phoneNumber: {
        type:  Number,
    },
    otp:{
        type:String,
    }
});

module.exports = mongoose.model("Otp", otpSchema);