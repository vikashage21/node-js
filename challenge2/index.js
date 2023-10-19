// fs module

const fs = require ('fs');


fs.mkdir('challenge2/set_1',(err)=>{

console.log("file is created")
})

fs.writeFile('challenge2/set_1/bio.txt',"creating file by fs module in assyn function ",(err)=>{
    console.log('file created')
})

fs.appendFile('challenge2/set_1/bio.txt','adding more data',(err)=>{
    console.log('data is added')
})

const data=fs.readFile('challenge2/set_1/bio.txt','utf-8',(err,data)=>{
    console.log(data)
})

console.log(data);

fs.rename('challenge2/set_1/bio.txt','challenge2/set_1/newBio.txt',(err)=>{
    console.log(err)
})
