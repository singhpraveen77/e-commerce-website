const express = require('express')
const mongoose = require('mongoose')
const dotenv=require('dotenv');
const connect=require("./connecting-mongo/connection")
const User=require('./models/User_model')
const createRoute=require("./routes/createUser")
const loginRoute=require("./routes/loginUser")
const cors = require('cors'); // Import CORS middleware
dotenv.config();
const app = express();

// Enable CORS
app.use(cors());

//database
connect();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))


//routes 
app.use("/registert ",createRoute);
app.use("/login",loginRoute);

const port = process.env.PORT || 5006

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})