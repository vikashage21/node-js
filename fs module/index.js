// console.log("welcome to node js")
// const name ="vikash "
// console.log(`${name}`)


// file core modules in node js

const fs = require('fs')


fs.writeFileSync('read.txt', 'learning node js')

// creating file writeFileSync (path , data)


fs.appendFileSync('read.txt', '  i am learning node js for backend')

const data=fs.readFileSync('read.txt')
console.log(data.toString())

fs.renameSync('read.txt','fs-module')

// retrun buffer data

// node.js includes and additional data type called buffer.
// not available in browser's javascript
// buffer is mainly used to store binary data,
// while reading from a file or receivving packets over the network