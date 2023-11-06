// const http = require('http')

// const server = http.createServer((req,res)=>{

// res.end('hello form other sides')

// })

// server.listen(8000,"127.0.0.1",()=>{
//     console.log("listening to the port no 8000")
// })

const url = require ('url')
const http = require("http");
const fs = require ('fs')
const port = 4000;

// create server

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("hello this is home page");
  } else if (req.url == "/about") {
    res.end("hello this is about page");
  } else if (req.url == "/contact") {
    res.end("this is contact page");
 
  }else if(req.url=="/userapi"){
    fs.readFile('userApi/userApi.json',"utf-8",(err,data)=>{
      console.log(data)
      res.writeHead(200,{"Content-type":"application/json"})
      res.end(data)
    })
  }
  else{
  
    res.writeHead(404,{"Content-type":"text/html"})
    res.end('404 not found')
  }
});

server.listen(`${port}`, "127.0.0.1", () => {
  console.log(`listening on port ${port}`);
});
