const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const hashPassword=async (password)=>{
    const salt= await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);


}



const comparePassword=async(password,hashedPassword)=>{
    const check=await bcrypt.compare(password,hashedPassword)
    return check;
};
const generateToken=(user)=>{
    return  jwt.sign(
        {
        email:user.email,
        username:user.username
        },
    process.env.JWT_SECRET,{expiresIn:"40h"})


}

module.exports={hashPassword,comparePassword,generateToken};