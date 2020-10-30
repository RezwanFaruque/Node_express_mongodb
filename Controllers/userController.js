const User = require('../Models/user');
const bycrypt = require("bcrypt");
const {registervalidator} = require('./validator/uservalidation');

 exports.register= async (req,res,next)=>{

    console.log(req.body);
    const {errors} = registervalidator(req.body);
    if(errors){
        return res.json({
            status: "error",
            message: "User Registration failed for validation issue",
            error: errors.details[0].message,
        })
    }

    let existedemail = await User.findOne({email: req.body.email});
    if(existedemail != null){
       return res.json({
            status: "error",
            message: "Email already existed try another one!!",
        })
    }else{
        next();
    }
    let user = new User();

    user.username = req.body.name;
    user.email = req.body.email;
    const salt = await bycrypt.genSalt(10);
    const password = await  bycrypt.hash(req.body.password,salt);
    user.password = password;

    user.save((err)=>{
        if(err){
            return  res.json({
                status: "error",
                message: "User registration failed",
                error: err,
            })
        }else{
            return  res.json({
                status: "success",
                message: "User registration successfull",
            })
        }
        
    })

    next();
}