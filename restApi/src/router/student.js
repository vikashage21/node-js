// crating a router in node js
const express = require ('express')
const router = new express.Router();
const student = require ('../models/students')

// we need to define the router
router.post('/student',(req,res)=>{
    console.log(req.body)
const user = new student(req.body)
user.status(201).save().then(()=>{
    res.send(user)
    
}).catch((err)=>{
    res.status(400).send(err)
    console.log(err)
})




})

// reading the data of students


router.get('/students', async(req,res)=>{
    try{
const userData = await student.find()
res.send(userData)


    }catch(e){
        res.send(e)

    }
})

// get the indivisual student data

router.get('/students/:id', async (req, res)=>{


try{
    const _id = req.params.id
   
    const user =  await student.find({_id: _id})
    res.send(user)

}catch(e){
console.log(e)
}



})


// update the students data by its id

router.patch("/students/:id", async(req,res)=>{

    try{
    const _id = req.params.id;

    const user= await student.findByIdAndUpdate(_id, req.body)
       
console.log(user)
res.send(user)

    }catch(e){
        console.log(e)

    }

})
// deleting the data from database

router.delete("/students/:id",async (req,res)=>{

    try{
        const _id= req.params.id
        const deleteStudent = await student.findByIdAndDelete(req.params.id)
if(!req.params.id){
    return res.status(404).send()

}
router.send(deleteStudent)

    }catch(e){
res.status(500).send(e)
    }

})


module.exports= router