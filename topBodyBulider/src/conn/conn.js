const mongoose = require ('mongoose')


// connecting to database

mongoose.connect('mongodb://127.0.0.1:27017/topbodybuilder').then(()=>
{
    console.log('connecting to database')
}).catch((e)=>{
    console.log(e)
})

