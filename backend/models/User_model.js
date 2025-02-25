let mongoose= require('mongoose')

let User_Schema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
        
    },
    
    password:{
        type:String,
        required:true
    },
    isadmin:{
        type:Boolean,
        default:false
        // required:true
    },
    profile:{
        type:String,
        // required:true
    }
})

module.exports=mongoose.model('user_collection',User_Schema);