const router = require('express').Router();

const postController = require('./Controllers/postcontroller');
const categoryController = require('./Controllers/categoryController');
const UserController = require('./Controllers/userController');
const DashboardController = require('./Controllers/dashboardController');
const CommentsController = require('./Controllers/commentsController');
const QuestionController = require('./Controllers/QuestionController');


router.get('/',function(req,res){
    res.json({
        status: 'Api works Fine',
        message: 'Here is loding from api'
    })
});


router.route('/posts').get(postController.index).post(postController.add);

router.route('/posts/:postTitle')
      .get(postController.view);

router.route('/posts/:postId')
      .patch(postController.update)
      .delete(postController.delete);


router.route('/categories').get(categoryController.get);

router.route('/post/:postId/category').post(categoryController.add);
// comments route
router.route('/post/:postId/comments').post(CommentsController.add);
router.route('/post/:postId/comment/:commentId').patch(CommentsController.update);

// user routes
router.route('/user/registration').post(UserController.register);
router.route('/user/login').post(UserController.login);
// user question submit api
router.route('/user/question/:qId').post(QuestionController.submitanswer);


// dashboard afterlogin
router.route('/home').get(DashboardController.get);



// Admin panel exam router
router.route('/admin/questions').post(QuestionController.add);


module.exports=router;