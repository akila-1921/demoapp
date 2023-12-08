const express = require('express');
const app = express();
const mongoose = require('mongoose');
const body = require('body-parser')
const cors = require('cors')
const details = require('./Schema/UserSchema')
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors())
async function db(){
mongoose.connect('mongodb://0.0.0.0:27017/',function(err){
    if(err){
        console.log(err);
    }else{
        console.log('connected');
    }
})
}
db();

app.post('/login', function(req,res){
    const {Email,Password} = req.body;
    details.findOne({Email:Email, Password:Password})
    .then(user=>{res.send(user)
         })
})

app.post('/register', function( req,res){
    details.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})
app.post('/sendotp',function(req,res){
  // const {phoneNumber, OTP}= req.body;
  details.create(req.body)
.then(user=>{res.send(user)})
.catch(err=>console.log(err))
})
app.post('/verify',function(req,res){
  const {phoneNumber,OTP} = req.body
  details.findOne({phoneNumber:phoneNumber,OTP:OTP})
  .then(User=>{res.send(User)})
})





app.listen(1001,()=>{console.log('This server is running');})


