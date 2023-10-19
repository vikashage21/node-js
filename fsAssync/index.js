const fs = require('fs');

fs.writeFile('fsAssync/text.txt','testing fs modules ',(err)=>{
    console.log('created file')
    console.log(err)
})

// note -- assyn core module , callback functions

fs.readFile('fsAssync/text.txt',"utf-8",(err,data)=>{
    console.log(data)
})