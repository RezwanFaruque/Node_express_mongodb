
exports.get = (req,res)=>{

    return res.json({
        status: "success",
        message: "Dashboard entered!!",
        user: req.user,
    })
}