const user = require('../model/Model')

const createUser=async(req,res)=>{
    const {name,age}=req.body
    try{

        const create=await user.create({name,age})
        res.status(201).json(create)
    }
    catch(err){
        console.log(err)
    }
}

const getUser=async(req,res)=>{
    const{id}=req.params
    try{
        const getUser=await user.findById(id)
        res.status(201).json(getUser)
    }
    catch(err){
        console.log(err)
    }

  }

  const updateUser=async(req,res)=>{
    const {id}=req.params
    try{
        const update= await user.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).json(update)
    }
    catch(err){
        console.log(err)
    }
  }


  const deleteUser=async(req,res)=>{
    const{id}=req.params
    try{
      const deleteUser=await user.findByIdAndDelete(id)
      res.json(deleteUser)
    }
    catch(err){
        console.log(err)
    }
  }

module.exports={createUser,getUser,updateUser,deleteUser}
