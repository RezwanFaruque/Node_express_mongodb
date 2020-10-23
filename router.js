const router = require('express').Router();

const postController = require('./postcontroller');

router.get('/',function(req,res){
    res.json({
        status: 'Api works Fine',
        message: 'Here is loding from api'
    })
});


router.route('/posts').get(postController.index).post(postController.add);




module.exports=router;