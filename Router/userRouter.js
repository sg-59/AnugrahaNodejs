const router=require('express').Router()
const user=require('../Model/userSchema')
router.post('/postData',async (req,res)=>{
    console.log(req.body);
    
    try{
const data=await user.create({username:req.body.Name,email:req.body.Email,...req.body})
res.send({backendResponse:data})
    }catch(err){
res.send(err)
    }
})

router.get('/get_Data_from_Database',async(req,res)=>{
    try{
const value=await user.find()
res.send(value)
    }catch(err){
        res.send(err)

    }
})

router.get('/get_singleData_from_Database/:value',async(req,res)=>{
    try{
const value=await user.findById(req.params.value)
res.send(value)
    }catch(err){
        res.send(err)

    }
})
router.post('/get',async(req,res)=>{
    console.log(req.body);
    
    try{
const value=await user.findOne({email:req.body.Email})
res.send(value)
    }catch(err){
        res.send(err)

    }
})
router.get('/getquerry',async(req,res)=>{
    console.log(req.query);
    
    try{
const value=await user.findOne({email:req.query.Email})
res.send(value)
    }catch(err){
        res.send(err)

    }
})

router.put('/update_dataBase/:id',async(req,res)=>{
    try{
const updateDatabase=await user.findByIdAndUpdate(req.params.id,{$set:{email:req.body.Email,...req.body}},{new:true})

res.status(200).json(updateDatabase)
    }catch(err){
res.status(500).json(err)
    }
})
router.put('/update_dataBaseone',async(req,res)=>{
    console.log(req.query.Email);
    console.log(req.body);
    
    
    try{
const updateDatabase=await user.findOneAndUpdate({email:req.query.Email},{$set:{email:req.body.Email,...req.body}},{new:true})

res.status(200).json(updateDatabase)
    }catch(err){
res.status(500).json(err)
    }
})




module.exports=router