const User=require("../models/User_model");

const handleLogin=async (req, res) => {
    let {email,password}=req.body;
    try {
        let checkuser=await User.findOne({email});
        console.log("backend hit")
    console.log(checkuser);
    if(!checkuser)return res.send("no such user exist")
    if(checkuser.password!==password)return res.send("worng pass");
    res.send(checkuser);
    res.send("working")
    } catch (error) {
        console.log(error);  
    }
}

const handlecreateuser=async(req,res)=>{
    let {username,email,password}=req.body;
    console.log(username);
    
    try{
        let usercheck =await  User.findOne({email});
        if(usercheck)return res.send(usercheck);
        
        let newuser= await User.create({
            username,email,password
        })
        await newuser.save();
        console.log(newuser);
        res.send(newuser);

    }
    catch(err){
        console.log("error in the createUser router",err)
    }
}

module.exports= {handleLogin,handlecreateuser}