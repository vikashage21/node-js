const express = require('express')

const app = express();

// app.get(rotue,callback)


// API
// GET 
// POST 
// PUT 
// DELETE

// the callback function has 2 parameters , request (req) and response (res).
// the request object (req ) represents the Http request and has properties for the request qurey sting, parameters , body,
// http headers, etc
// similarly, the response object represents the http response 
// that the express app sends when it receives an Http request.


app.get('/', (req, res)=>{

    res.send('hello form the express')

})
app.get('/about',(req,res)=>{
    res.send('this is  about page ')
})

app.listen(8000,()=>{
    console.log('listing the port at 8000')
})