const router = require('express').Router();

const postController = require('./Controllers/postcontroller');
const categoryController = require('./Controllers/categoryController');
const UserController = require('./Controllers/userController');
const DashboardController = require('./Controllers/dashboardController');


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

// user routes
router.route('/user/registration').post(UserController.register);
router.route('/user/login').post(UserController.login);



// dashboard afterlogin
router.route('/home').get(DashboardController.get);




module.exports=router;