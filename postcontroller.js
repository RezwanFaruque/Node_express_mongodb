// post controller

const Post = require('./posts');

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
exports.view=(req,res)=>{
    Post.findById(req.params.postId,(err,PostModel)=>{
        if(err){
            res.json(
                {
                    status: "error",
                    error: err

                }
            )
        }
        res.json({
            status: "success",
            data: PostModel,
        })
    })
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
exports.delete = function (req, res) {
    Post.deleteOne({
        _id: req.params.postId
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Post Deleted'
        })
    })
}