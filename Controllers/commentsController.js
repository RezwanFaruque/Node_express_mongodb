const Comments = require('../Models/comments');
const Post = require('../Models/posts');

exports.add = async (req,res)=>{

    let post = await Post.findOne({_id:req.params.postId});
    let comment = new Comments();
    comment.comment = req.body.comment;
    comment.post = post._id;
    comment.save();

    post.comments.push(comment._id);
    post.save((err)=>{
        if(err){
            return res.json({
                status: "error",
                message: "Comments save failed",
            })
        } 

        return res.json({
            status: "success",
            message: "Comments Save successfully",
        })
    })

  

}