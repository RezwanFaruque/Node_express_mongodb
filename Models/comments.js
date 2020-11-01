const mongoose = require("mongoose");


const CommentsSchema = mongoose.Schema({


    comment:{
        type: String,
        required: true,
    },

    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "PostModel"
    }


})

let Comment = module.exports = mongoose.model('CommentsModel',CommentsSchema);

module.exports.get = function (callback, limit) {
    Comment.find(callback).limit(limit); 
 }