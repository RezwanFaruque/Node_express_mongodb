const mongoose = require('mongoose');

const User = mongoose.Schema({


    username: {
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
    },

    password:{
        type: String,
        required: true,
        min: 6,
        max: 20,
    }



})


let Usermodel = module.exports = mongoose.model('UserModel',User);

module.exports.get = function (callback, limit) {
    Usermodel.find(callback).limit(limit); 
 }