const mongoose = require ('mongoose')

const validator = require('validator')
// connecting to database

mongoose.connect('mongodb://127.0.0.1:27017/youtube').then(()=>{
    console.log('connecting to database ...')

}).catch((error)=>{
    console.log(error)
})


// creating a schema for mongoose model

const playListSchema= mongoose.Schema({
    name:String,
    totalVideo:Number,
    use:String,
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
               throw new Error ('Email is inValid') 
            }
        }
    }
})
// the type should be capital letter


// creating a model 

const   Playlist= mongoose.model('Playlist',playListSchema);

// creating a collection inside mongoose 


const javascriptPlayList= new Playlist({
    name:'javascript',
    totalVideo:50,
    use:'Frotend'
})

const NodeJsPlayList= new Playlist({
    name:'nodeJs',
    totalVideo:40,
    use:'Frotend'
})

const mongoDBPlayList= new Playlist({
    name:'javascript',
    totalVideo:90,
    use:'Frotend'
})

const pythonPlayList= new Playlist({
    name:'Python',
    totalVideo:40,
    use:['backend,Frontend']
})

const javaPlayList = new Playlist({
    name:'java',
    totalVideo:50,
    use:'programming',
    email:'vk220783@'
})
 

// inserting collection inside the database


Playlist.insertMany([javaPlayList]).then((data)=>{
    console.log(`the data is stored in database : ${data}`)

}).catch((err)=>{
    console.log(err)
})


const getDoument =async ()=>{

// const result = await Playlist.find({name:'javascript'}).select({name:1}).limit(1)
// const result = await Playlist.find({totalVideo:{$gte:85}}).select({name:1}).limit(1)
// const result = await Playlist.find({name: {$in :['javascript','nodeJs']}}).select({name:1})
// const result = await Playlist.find({ $or: [{name:'javascript'},{name:'nodeJs'}]})
// const result = await Playlist.find({ $and: [{name:'javascript'},{name:'nodeJs'}]})

// couting query in mongoose 
// .countDocuments()

// const result = await Playlist.find({ $and: [{name:'javascript'},{name:'nodeJs'}]})

// const result = await Playlist.find({ $or: [{name:'javascript'},{name:'nodeJs'}]}).countDocuments()

// const result = await Playlist.find({ $or: [{name:'javascript'},{name:'nodeJs'}]}).sort({name:1})
// const result = await Playlist.updateOne({name:'javascript'},{$set :{name:"javaScript"}})

const result = await Playlist.find()


console.log(result)

}


getDoument()
//
// opertors
// $eq
// $gt
// $gte
// $in
// $lt
// $lte
// $ne
// $nin

// deleting the documents in mongodb

const  deleteDocument = async (_id)=>{

try{

const result = await Playlist.deleteOne({_id});
console.log(result)

} catch(err){

    console.log(err)
}


}


// deleteMany()

// deleteDocument("653e0dec18f1c857e845de3f")

// vaildation in mongodb

// type
// required
// lowerCase
//upperCase
//minlength
// maxlength
// trim


// validate(value){

//     if(value<0){
//         throw new Error ('videos count should not be negative')
//     }
// }

// validator npm package