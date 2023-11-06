require('dotenv').config()

const express = require('express')

 
const app = express()

app.get('/', (req, res)=>{
    res.send('welcome to my home page')
})
app.get('/about', (req, res)=>{
    res.send('welcome to my about page')
})
app.get('/doc',(req,res)=>{
    res.write('<h1> this is doc page written in html </h1>')
})
app.get('/contact', (req, res)=>{
    res.send('welcome to my contact page')
})
app.get('/temp', (req, res)=>{
    res.send('welcome to my temp page')
})
app.get ('/data',(req, res)=>{
    res.json({
        name:"vikash",
        language:"javascript"
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`)
})