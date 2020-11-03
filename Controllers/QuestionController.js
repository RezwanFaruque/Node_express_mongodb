
const Question = require('../Models/question');
const bycrypt = require("bcrypt");

// This is admin panel Functional controller 

exports.add = async (req,res)=>{

  let queston = new Question();

  queston.question_title = req.body.question_title;
  queston.answer_one = req.body.answer_one;
  queston.answer_two = req.body.answer_two;
  queston.answer_three = req.body.answer_three;
  queston.answer_four = req.body.answer_four;

    const salt = await bycrypt.genSalt(10);
    const c_answer = await  bycrypt.hash(req.body.c_answer,salt);
    queston.correct_answer = c_answer;

  queston.save((err)=>{
      if(err){
          return res.json({
              status: "error",
              message: "Question with answer can not be created",
              errors: err
          })
      }

      return res.json({
          status: "success",
          message: "Question with answer save successfully",
      })
  })

}


// answer submission for question answer 
exports.submitanswer = async (req,res)=>{

    Question.findById(req.params.qId, async (err,question)=>{
        

        const submit_answer = req.body.submit_answer;

        const correct_submit = await bycrypt.compare(submit_answer,question.correct_answer);

        if(!correct_submit){
            return res.json({
                message: "Your answer is not correct",
            })
        }else{
            return res.json({
                message: "Your answer is correct!!",
            })
        }
    

    });


}