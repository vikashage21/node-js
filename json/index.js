
const fs = require('fs')
const bioData={
name:"vikash",
age:12,
email:"vk2220783@gmail"

}



// JSON.stringify() object data will convert in json 
// JSON.parse() json data convert into object 


// const dataJson = JSON.stringify(bioData)
// console.log(dataJson)

const jsonData = JSON.stringify(bioData);

fs.writeFile('json/data.json',jsonData,(err)=>{
    console.log('file is created')
    
})


const fsData =fs.readFile('json/data.json',"utf-8",(err,data)=>{

    console.log(data)
})
console.log(fsData)



 function convertIntoObj(json) {
   return JSON.parse(json) 
    
}

const data1=convertIntoObj(jsonData)

for (const key in data1) {
   console.log(data1[key])
}