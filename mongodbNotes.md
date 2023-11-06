###### mongodb
cmd 


show dbs

use filpkart

creating documents


db.items.insertOne({
    productName:"iphone",
    price:"3999",
    abalableColor:["red","blue","white"]
})


db

show collections

db.filpkart.find()

crud opertions in mongodb

db.products.insertOne({})
db.products.insertmany([{items}])

reading the documents


db.products.find({name:"iphone"},{_id:0,name:1})


limit()

db.products.find({name:'iphone'}).limit(1)

skip()

db.products.find({name:'iphone'}).limit(1).skip(1)



// read query

db.collections.find(query,projection)



update the documents

db.collection_name.updateOne(<filter>,<update>)

db.collection_name.updateMany(<filter>,<update>)
db.products.updatOne({name"iphone"},{$set: {name"iphone15"}})

delete operations 

db.products.deleteMany({name:"iphone"})


#####