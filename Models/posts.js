const mongoose = require('mongoose');

let postSchema = mongoose.Schema({


    title:{
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    postnumber: {
        type: String,

    },

    created_at: {
        type: Date,
        default: Date.now

    }


});

let Post = module.exports = mongoose.model('PostModel',postSchema);

module.exports.get = function (callback, limit) {
    Post.find(callback).limit(limit); 
 }