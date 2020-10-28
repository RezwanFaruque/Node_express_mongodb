const mongose = require('mongoose');
const schema = mongose.Schema;

let category = mongose.Schema({


    name:{
        type: String,
        required: true,
    },

    posts:[
        {
        type:schema.Types.ObjectId,
        ref: "PostModel"
        }
    ]

})

let Category = module.exports=mongose.model('CategoryModel',category);

module.exports.get = (callback,limit)=>{
    Category.find(callback).limit(limit);
}