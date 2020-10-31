const User = require('../Models/user');
const bycrypt = require("bcrypt");
const {registervalidator} = require('./validator/uservalidation');
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// config dotenv
dotenv.config();



 exports.register= async (req,res,next)=>{

    const errors = registervalidator(req.body);
    console.log(errors);
    
    if(errors){
        return res.json({
            status: "error",
            message: "User Registration failed for validation issue",
            error: errors.error.details[0].message,
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

   
};


exports.login = async (req,res)=>{

    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!req.body.email.match(mailformat)){
        return res.json({
            status: "error",
            message: "Invalid mail formate",
        })
    }

    if(req.body.password.length<=5){
        return res.json({
            status: "error",
            message: "password should be atleast 6 charracters",
        })
    }

    const user = await User.findOne({email: req.body.email});
    if(!user){
        return res.json({
            status: "error",
            message: "email does not exist try right one", 
        })
    }

    const userpassword = await bycrypt.compare(req.body.password,user.password);
    if(!userpassword){
        return res.json({
            status: "error",
            message: "password error!",
        })
    }


    console.log(process.env.TOKEN_SECRET);

    const token = jwt.sign(
        {
        name: user.username,
        id: user._id,
        },

        process.env.TOKEN_SECRET,
        {
            expiresIn: "1h",
        }
    
    )

    if(user && userpassword){
        return res.header("auth-token",token).json({
            status: "success",
            message: "Log in successfull",
            error: null,
            data: token
        })
    }
    
   
}