const category = require('../Models/category');
const Category = require('../Models/category');
const Post = require('../Models/posts');


exports.get = (req,res)=>{
    category.get((err,categories)=>{
        if(err){
            res.json({
                status: "error",
                message: "No categroy exists"
            })
        }
        res.json({
            status: "success",
            message: "Category found",
            data: categories
        })
    })
}

exports.add = (req,res)=>{
  const  post =  Post.findById(req.params.postId);
  let category = new Category();
  category.name = req.body.name;
  category.posts = post._id;

 
  
//   saving category 
    category.save((err)=>{
        if(err){
            res.json({
                status: "error",
                error: err,
            })
        }
        res.json({
            status: "success",
            message: "Category save successfully",
        })
    })
  
}