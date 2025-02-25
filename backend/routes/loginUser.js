const express = require('express')
const User=require("../models/User_model")
const { handleLogin } = require('../controllers/auth.controller');


const router = express.Router();

router.post('/',handleLogin)

module.exports=router