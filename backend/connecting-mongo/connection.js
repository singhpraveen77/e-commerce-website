const mongoose=require('mongoose')


let connect=async()=>{
    await mongoose.connect(process.env.URI)
    .then(()=>{
        console.log("data base connected  !!")
    }).catch((err)=> {
        console.log("error in databases",err);
    })
    
}

module.exports=connect;