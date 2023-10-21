const path = require('path')
console.log(path.dirname("C:/Users/PC/Desktop/sigma web development/node js/path modules/index.js"))
console.log(path.extname("C:/Users/PC/Desktop/sigma web development/node js/path modules/index.js"))
console.log(path.basename("C:/Users/PC/Desktop/sigma web development/node js/path modules/index.js"))
const data=path.parse("C:/Users/PC/Desktop/sigma web development/node js/path modules/index.js")
console.log( data.name)


// for (const key in data) {
//     console.log(data[key])
//     // object 
// }


// const ar=[1,45,4,5,5,4]

// for (const item of ar) {
//     console.log(item)
//     // array
    
// }
// ar.forEach((item)=>{
//     console.log(item)
//     // array

// })