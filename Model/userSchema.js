
const mongoose=require('mongoose')

const userData=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    age:{type:String,required:true},
    place:{type:String,required:true},
    phoneNumber:{type:Number},
    password:{type:String}

},{timestamps:true})

module.exports=mongoose.model("AnugrahanewCollection",userData)
