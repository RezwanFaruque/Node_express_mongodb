// post controller

const Post = require('../Models/posts');

// For index (show all the post)
exports.index = (req,res)=>{
    Post.get(function(err,PostModel){
        if(err){
            res.json({
                status: "error",
                message: err,
            })
        }
        res.json({
            status: "success",
            message: "All Post Fetch Successfully",
            data: PostModel,
        })
    })
}

// For Create new Post 
exports.add = (req,res)=>{
    let post = new Post();
    post.title = req.body.title;
    post.description = req.body.description;
    post.postnumber = req.body.postnumber;
    post.category = req.body.category_id;

    // save and check error

    post.save((err)=>{
        if(err){
            res.json({
                status: "error",
                message: err,
            })
        }
        res.json({
            status: "success",
            message: "New Post Added successfully",
            data: post,
        })
    })
}

// For view single Post
exports.view= async (req,res)=>{
    let post = await Post.findOne({title:req.params.postTitle}).populate('comments');

    if(!post){
        return res.json({
            status: "error",
            message: "Post with does not exist"
        })
    }
    if(post){
       return res.json({
            status: "success",
            message: "post found",
            data: post,
        })
    }
}

// For updating single post
exports.update=(req,res)=>{
    Post.findById(req.params.postId,(err,PostModel)=>{
        if(err){
            res.json({
                status: "error",
                message: "Post Update failed",
                errors: err,
            })
        }

        PostModel.title = req.body.title;
        PostModel.description = req.body.description;
        PostModel.postnumber = req.body.postnumber;

        PostModel.save((err)=>{
            if(err){
                res.json({
                    status: "error",
                    message: "Post Update failed",
                    errors: err,
                })
            }

            res.json({
                status: "success",
                message: "Post Update Successfuly",
                data: PostModel,
            })
        })
       
    })
}



// For Delete Single Post
exports.delete = (req, res)=>{
    Post.deleteOne({
        _id: req.params.postId
    },(err, contact)=>{
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Post Deleted'
        })
    })
}

