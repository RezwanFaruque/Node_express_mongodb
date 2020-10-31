const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config();

const varifytoken = (req,res,next)=>{

    const token = req.header("auth-token");
    if(!token){
        return res.json({
            status: "error",
            message: "Access denied!!"
        })
    }

    try{

        const verify = jwt.verify(token,process.env.TOKEN_SECRET);
        req.user= verify;
        next();

    }catch(err){
        return res.json({
            status: "error",
            message: "Token is not valid",
            errors: err,
        })
    }
}

module.exports = varifytoken;