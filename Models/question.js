const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({


    question_title:{
        type: String,
        required: true,
    },

    answer_one:{
        type: String,
        required: true,
    },

    answer_two:{
        type: String,
        required: true,
    },

    answer_three:{
        type:String,
        required: true,
    },

    answer_four:{
        type: String,
        required: true,

    },

    correct_answer:{
        type: String,
        required: true,
    }

})

let Question = module.exports = mongoose.model('QuestionModel',QuestionSchema);

module.exports.get = function (callback, limit) {
    Question.find(callback).limit(limit); 
 }