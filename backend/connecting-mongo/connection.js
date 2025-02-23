const mongoose=require('mongoose')

const dotenv=require('dotenv')
dotenv.config();
let connect=async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e-web")
    .then(()=>{
        console.log("data base connected  !!")
    }).catch((err)=> {
        console.log("error in databases",err);
    })
    
}

module.exports=connect;