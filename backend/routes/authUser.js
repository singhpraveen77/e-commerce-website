const express=require("express")
const { handlecreateuser, handleLogin } = require("../controllers/auth.controller");
const router=express.Router();

router.post("/register",handlecreateuser)
router.post('/login',handleLogin)

module.exports=router;