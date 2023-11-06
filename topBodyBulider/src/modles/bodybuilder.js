const mongoose = require ('mongoose')


const bodybuilderSchema = mongoose.Schema({

    name:{
      type: String  ,
      required:true,
      lowerCase:true,
    },
    height:{
        type : String,
        required:true
    },
    weight:{
        type : String,
        required:true
    },
    title:{

        type: String  ,
      required:true
        
    },
    desc:{
        type:String,
    }
})

const bodybuilder = new mongoose.model ('bodybuilder',bodybuilderSchema)
module.exports=bodybuilder;