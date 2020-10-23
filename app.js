const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();


//configure bodyparser to hande the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


// connected to mongodb
const dbpath = 'mongodb://localhost:27017/admin';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

// connecting
const mongo = mongoose.connect(dbpath,options)

mongo.then(()=>{

    console.log('connected to mongodb');

    },error =>{console.log(error,'errror');}
)



// api routers
const apiRoute = require('./router');

app.use('/api',apiRoute);


app.get('/',function(req , res){
    res.send('Node js express server is running');
})

app.listen('3000',function(){
    console.log('server started at port 3000!!');
})

