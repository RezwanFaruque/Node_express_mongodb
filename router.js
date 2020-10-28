const router = require('express').Router();

const postController = require('./Controllers/postcontroller');
const categoryController = require('./Controllers/categoryController');

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


router.route('/categories').get(categoryController.get);

router.route('/post/:postId/category').post(categoryController.add);




module.exports=router;