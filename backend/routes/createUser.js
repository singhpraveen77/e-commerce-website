const express=require("express")
const User=require("../models/User_model");
const { handlecreateuser } = require("../controllers/auth.controller");
const router=express.Router();

router.post("/",handlecreateuser)

module.exports=router;