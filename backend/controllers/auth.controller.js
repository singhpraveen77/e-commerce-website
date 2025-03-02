const User=require("../models/User_model");
const { hashPassword, generateToken } = require("../utlis/authUtlis");



const handleLogin=async (req, res) => {
    let {email,password}=req.body;
    try {
    let checkuser=await User.findOne({email});
    console.log("backend hit")
    console.log(" till cookie ")
    if(!checkuser)return res.status(404).send("no such user exist")
    if(checkuser.password!==password)return res.status(401).send("worng pass");

    const token=generateToken(checkuser); // Removed JSON.stringify as it's not needed
        
        console.log("cookie-set-successfully");
        res.status(200).cookie("token", token).send(checkuser); // Added status code for success
    } catch (error) {
        console.log(error);  
        res.status(500).send("Internal Server Error"); // Added error handling with status code
    }
}

const handlecreateuser=async(req,res)=>{
    let {username,email,password}=req.body;
    
    try{
        let usercheck =await  User.findOne({email});
        if(usercheck)return res.status(409).send("User already exists"); // Added status code for conflict
        const hashedPassword=await hashPassword(password);
        
        let newuser= await User.create({
            username,email,password:hashedPassword
        })        
        const token= generateToken(newuser);
        
        res.status(201).cookie("token",token).json({newuser,token}); // Added status code for created
    }
    catch(err){
        console.log("error in the createUser router",err)
        res.status(500).send("Internal Server Error"); // Added error handling with status code
    }
}

module.exports= {handleLogin,handlecreateuser}