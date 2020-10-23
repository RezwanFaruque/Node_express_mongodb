const router = require('express').Router();

const postController = require('./postcontroller');

router.get('/',function(req,res){
    res.json({
        status: 'Api works Fine',
        message: 'Here is loding from api'
    })
});


router.route('/posts').get(postController.index).post(postController.add);

router.route('/posts/:postId')
      .get(postController.view)
      .patch(postController.update)
      .delete(postController.delete);




module.exports=router;