require('dotenv').config()
const express = require('express')

const app = express()

const PORT = process.env.PORT || 8000
const router = require('./router/router')

const path = require ('path')

const hbs = require('hbs')
const cookieParser= require('cookie-parser')


// connecting to database 

require('../src/db/conn')

const pratialPath = path.join(__dirname,'../src/template/pratials')
const staticPath = path.join(__dirname,'../public')
const tempPath = path.join(__dirname,'../src/template/views')


app.use(cookieParser())

app.use(express.static(staticPath))

hbs.registerPartials(pratialPath)

app.set('view engine', 'hbs')

app.set('views',tempPath)

const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.urlencoded({extended:false}))

app.use(router)







// listing on port 8000

app.listen(PORT, ()=>{
    console.log(` listing on port ${PORT}`)
})