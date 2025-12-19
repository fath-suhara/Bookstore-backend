const mongoose=require('mongoose')
require('dotenv').config();
const connectdb=async()=>{
    try{
      await mongoose.connect(process.env.MONGO_URI)
      console.log("DB connected successfully.....");
      

    }
    catch(error){

        console.error("connection failed",error.message);
    }

}

module.exports=connectdb;
// connectdb()
