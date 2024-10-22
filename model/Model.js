const mongoose=require('mongoose')

const user=mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    age:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('users',user)