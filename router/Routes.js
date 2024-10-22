const express=require('express')

const router=express.Router()

const {createUser, getUser, updateUser, deleteUser}=require('../controller/UserCtrl')

router.post('/adduser',createUser)
router.get('/getuser/:id',getUser)
router.put('/update/:id',updateUser)
router.delete('/delete/:id',deleteUser)

module.exports=router

