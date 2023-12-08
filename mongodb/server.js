const express = require('express');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const multer = require('multer')

const User = require('./Schema/userSchema')
// const Data = require('./Schema/userscemaeg')

const corsopt = {
    origin:'http://localhost:3000'
}
app.use(cors(corsopt));

app.use(express.urlencoded({extended:true}));
app.use(body_parser.json());


// mongoose.connect('mongodb+srv://root:root@cluster0.iggipb4.mongodb.net/?retryWrites=true&w=majority' , function(error){
mongoose.connect('mongodb://127.0.0.1:27017/CRUD' , function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log('connected');
    }
})  




app.get('/user',function(req,res){
    User.find()
    .then(function(Suser){
        res.send(Suser)
    })
    .catch(error=>res.send(error));
})

app.post('/crtuser',function(req,res){
    console.log(req.body);
    try {
        User.create({
            Name:req.body.Name,
            Email:req.body.Email,
            Phone:req.body.Phone,
            Password:req.body.Password
        })
        
        // User.create(req.body)

        // User.insertMany({
        //     Name:req.body.Name,
        //     Email:req.body.Email,
        //     Phone:req.body.Phone,
        //     Password:req.body.Password
        // })
        .then(function(Suser){
            res.send(Suser)
        })

    } 

    catch (error) {
        res.send(error)
    }
})


app.get('/user/:id',function(req,res){
    User.findById(req.params.id)
    .then(function(Suser){
        res.send(Suser)
    })
    .catch(error=>res.send(error));
})

app.put('/updateuser/:id',function(req,res){
    User.findByIdAndUpdate(req.params.id,{
        Name:req.body.Name,
        Email:req.body.Email,
        Phone:req.body.Phone,
        Password:req.body.Password
    })
    .then(function(Suser){
        res.send(Suser)
    })
    .catch(error=>res.send(error));
})

app.delete('/deluser/:id', function(req,res){
    User.findByIdAndDelete(req.params.id)
    .then(function(){
        res.send('Profile Deleted')
    })
    .catch(error=>res.send(error));
})

// -------------------------------------
// app.get('/getdata',function(req,res){
//     Data.find()
//     .then(function(fun){
//         res.send(fun)
//     })
//     .catch(error=>res.send(error));
// })
// app.post('/postdata',function(req,res){
//     try{
//         Data.create({
//             Name:req.body.Name,
//             Password:req.body.Password
//         })
//         .then(function(sended){
//             res.send(sended)
//         })
//     }
//     catch(err){
//         res.send(err)
//     }
// })


app.listen(1000,function(){console.log('this server is running');})