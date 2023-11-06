const express = require ('express')

require('./db/conn')

const student = require ('./models/students')

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 8000

const studentRouter= require('./router/student')



// we need to register our router

app.use(studentRouter)

// crate a new student 




app.listen(PORT,()=>{
    console.log('listing on prot 8000')
})