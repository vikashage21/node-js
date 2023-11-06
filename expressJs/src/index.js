const express = require('express')


const app = express()


const path = require ('path')


// buildin middleware

// path in node 
// relative absolute

const staticPath=path.join(__dirname,'../public')


app.use(express.static(staticPath))

const port = 8000


app.get((req, res)=>{
    res.send('hello world ')
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
