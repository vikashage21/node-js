// const http = require('http')

// const server = http.createServer((req,res)=>{

// res.end('hello form other sides')


// })


// server.listen(8000,"127.0.0.1",()=>{
//     console.log("listening to the port no 8000")
// })



const http = require("http")

const port =4000

// create server 

const server = http.createServer((req,res)=>{
    res.end('hello form other sides')
})

server.listen(`${port}`,"127.0.0.1",()=>{
    console.log(`listening on port ${port}`)
})