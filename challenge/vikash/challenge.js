const fs=require('fs')

//  fs.mkdirSync('vikash')

fs.writeFileSync('challenge/vikash/bio.txt','this is challenge text of node js')

fs.appendFileSync('challenge/vikash/bio.txt','adding more data')

const getData = fs.readFileSync('challenge/vikash/bio.txt',"utf-8")


fs.renameSync('challenge/vikash/bio.txt','mybio.txt')

console.log(getData) 

// delating the files and floder

// fs.unlinkSync('vikash/mybio.txt')

// fs.rmdirSync('vikash')