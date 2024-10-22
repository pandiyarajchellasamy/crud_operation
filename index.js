const express=require('express')
const mongoose = require('mongoose')

require('dotenv').config()
const userroute=require('./router/Routes')
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('DB Connected')
})
.catch((msg)=>{
    console.log(msg)
})
const app=express()
app.use(express.json())

app.use('/api/user',userroute)



app.listen(5000,()=>{
    console.log('server started')
})
 

    