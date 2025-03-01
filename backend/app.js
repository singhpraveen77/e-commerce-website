const express = require('express')
const dotenv=require('dotenv');
const connect=require("./connecting-mongo/connection")
const cors = require('cors'); // Import CORS middleware
const authRoute = require("./routes/authUser")
const User= require("./models/User_model")
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
app.post('/register', async (req, res) => {

  try {
    const user = await User.create(req.body);
    await user.save(); // Save the user if necessary
    return res.status(201).json(user); // Send response and exit

  } catch (error) {
    console.error("Error in registration:", error);
    return res.status(500).send("Server error"); // Send error response
  }
});


app.post('/login', async (req, res) => {

      let {email,password}=req.body;
      try {
          let checkuser=await User.findOne({email});
          console.log("backend hit")
      console.log(checkuser);
      if(!checkuser)return res.send("no such user exist")
      if(checkuser.password!==password)return res.send("worng pass");
    
      } catch (error) {
          console.log(error);  
      }
});


const port = process.env.PORT || 5006

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})