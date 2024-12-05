const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()

const userRouterpage=require('./Router/userRouter')
const deleteRouterPage=require('./Router/deleteRouter')


mongoose.connect(process.env.MongoUrl).then(()=>{
    console.log("data base are connected");
    
}).catch((err)=>{
    console.log(err.message);
    
})

app.use(express.json())

app.use("/api",userRouterpage)
app.use("/deleteApi",deleteRouterPage)


app.listen(process.env.PORT,()=>{
    console.log("port 3000 is connected");
    
})
// http://localhost:3000/api
