const express = require('express')
const app = express()
const port = 8000;
const path = require ('path')
const hbs = require('hbs')


const  tempPath = path.join(__dirname,'/template/views')

const staticPath = path.join(__dirname,'../public')

const partialPath = path.join(__dirname,'/template/partials')

app.use(express.static(staticPath))



hbs.registerPartials(partialPath)

// to set the view engine



app.set('view engine',"hbs")


 // to set views folder to tmmplate folder as default 

app.set('views',tempPath)

app.get('/',(req, res)=>{
    res.render('index.hbs',{
        userName:"vikash"
    })


})
app.get('/about',(req,res)=>{
    res.render('about')
})


app.get('*',(req, res)=>{

res.render('404',{
    errorComment:"opps the page is not found"
})


// '*' this universal opertor which is used to show the message which not mach requesting url .

})

app.listen(port,()=>{
    console.log(`listining on ${port}`)
})