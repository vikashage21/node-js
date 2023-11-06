const mongoose = require('mongoose')



mongoose.connect('mongodb://127.0.0.1:27017/students-api').then(()=>{
    console.log('connecting to database ')

}).catch ((err)=>{
    console.log(err)
})


