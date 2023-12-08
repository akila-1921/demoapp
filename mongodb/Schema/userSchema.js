const mongoose = require('mongoose');

const user = mongoose.Schema({
    Name:{
        type:String
    },
    Email:{
        type:String
    },
    Phone:{
        type:String
    },
    Password:{
        type:String
    }
});

const users = mongoose.model('Users',user);

module.exports = users;
