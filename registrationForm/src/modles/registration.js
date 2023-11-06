
const mongoose = require("mongoose");
const validator = require("validator");
const registrationSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique : true,
    validate(value) {
        if (!validator.isEmail(value)) {
            throw new Error ('invalid Email ')
        }
      }
  },
  
phone:{
    type:String,
    require:true,
    unique:true
},

  password:{
type :String,
required:true,
  },
  confirm_password:{
    type :String,
required:true,
   
      },
age:{
    type :String,
    required:true,
    
}
})

const UserRegistration= new mongoose.model("UserRegistration",registrationSchema)

module.exports=UserRegistration
