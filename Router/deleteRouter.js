const router=require('express').Router()
const user=require('../Model/userSchema')
router.delete('/delete_Database_Data/:id',async(req,res)=>{
    try{
await user.findByIdAndDelete(req.params.id)
res.status(200).json({message:"your data is deleted"})
    }catch(err){
res.status(500).json({messge:err})
    }
})
router.delete('/delete_Database_DataOne',async(req,res)=>{
    try{
await user.findOneAndDelete({email:req.body.Email})
res.status(200).json({message:"your data is deleted"})
    }catch(err){
res.status(500).json({messge:err})
    }
})



module.exports=router