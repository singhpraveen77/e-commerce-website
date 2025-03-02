const express = require('express')
const dotenv=require('dotenv');
const connect=require("./connecting-mongo/connection")
const cors = require('cors'); // Import CORS middleware
const authRoute = require("./routes/authUser")
const User= require("./models/User_model")
const cookieParser = require('cookie-parser');
dotenv.config();
const app = express();

// Enable CORS
app.use(cors());

//database
connect();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());



//routes 

app.use("/auth",authRoute);

const port = process.env.PORT || 5006

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})