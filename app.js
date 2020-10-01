const express = require('express');

const app = express();

app.get('/',function(req , res){
    res.send('Node js express server is running');
})

app.listen('3000',function(){
    console.log('server started at port 3000!!');
})