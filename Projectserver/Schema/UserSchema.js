const mongoose = require('mongoose');

const user = mongoose.Schema({
    Name:{
        type:String
    },
    Email:{
        type:String
    },
    Password:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    OTP:{
        type:String
    }
});

const details = mongoose.model('Details',user);

module.exports = details;
