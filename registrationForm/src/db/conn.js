const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/BeeChat').then(()=>{
    console.log('connecting to database succesfully')
}).catch((e)=>{

    console.log('database connections failed !')
})

