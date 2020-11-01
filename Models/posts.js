const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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

    },

    category:{
        type: Schema.Types.ObjectId,
        ref: "CategoryModel",
        
    },

    comments:[{
        type: Schema.Types.ObjectId,
        ref: "CommentsModel",
    }]


});



let Post = module.exports = mongoose.model('PostModel',postSchema);

module.exports.get = function (callback, limit) {
    Post.find(callback).limit(limit); 
 }