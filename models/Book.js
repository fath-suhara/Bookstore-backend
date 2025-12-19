const mongoose=require('mongoose')
const { string } = require('yup')
const Books=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'title is required'],
        trim:true,
        maxlength:[100,'max 100 characters']


    },
     author:{
        type:String,
        required:[true,'author name is required'],
        trim:true,
    },
     year:{
        type:Number,
        required:[true,'publication year is required'],
        min:[1000,'year must be greater than 1000'],
        max:[new Date().getFullYear(),'this must be in future']


    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('Book',Books)