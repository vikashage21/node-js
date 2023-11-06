// streams 

// type of streams 

// readable
// writable
// duplex
// tranform


// data -- this event is fired there is data is available to read
// end -- this event is fired when there is no more data to read
// error -- this event is fired when there is any erro receiving or writing data.
// finish -- this event is fired wehn all the data has been flushed to underlying system


const http = require ('http')
const fs = require('fs')

const server = http.createServer()
server.on('request',(req,res)=>{
    // fs.readFile('input.txt','utf-8',(error,data)=>{
    //     if(error){
    //         return console.log(error)
    //     }else{
    //         res.end(data.toString())
    //     }
    // })


    const rstream = fs.createReadStream('input.txt')
    rstream.pipe(res)
})

server.listen(8000,"127.0.0.1",()=>{
    console.log('listening on port on 8000')
})