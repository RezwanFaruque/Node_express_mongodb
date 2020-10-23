// post controller

const Post = require('./posts');

// For index (show all the post)
exports.index = function(req,res){
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
exports.add = function(req,res){
    let post = new Post();
    post.title = req.body.title;
    post.description = req.body.description;
    post.postnumber = req.body.postnumber;

    // save and check error

    post.save(function(err){
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


// For Delete Single Post