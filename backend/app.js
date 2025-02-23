const express = require('express')
const mongoose = require('mongoose')
const dotenv=require('dotenv');
const connect=require("./connecting-mongo/connection")
const User=require('./models/User_model')

dotenv.config();
const app = express();
connect();

let xyz;
let createUser=async ()=>{
    let newUser=await new User({
        username:"Praveen",
        email:"fghj",
        password:"123"
    })

    await newUser.save();
    xyz=newUser;
    console.log(newUser);

}
createUser();


app.get('/', (req, res) => {
  res.send(xyz)
})




const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})