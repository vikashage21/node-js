const express = require('express')

const router = new express.Router()

const Bodybuilder = require('../modles/bodybuilder')
const bodybuilder = require('../modles/bodybuilder')

require('../conn/conn')





// adding data from the database 


router.post('/bodybuilder',async (req,res)=>{

    try{
        const user = new Bodybuilder(req.body)

        user.save()
        res.send(user)

    }catch(e){
        console.log(e)

    }




})

// getting data from database 

router.get('/bodybuilder', async (req, res)=>{
 try{
    const user =  await bodybuilder.find()


    res.status(200).send(user)
 }catch(e){
    res.status(400).send(e)

 }
   
})

// getting data from indivisual entry

router.get('/bodybuilder/:name', async (req, res)=>{
    try{

        const name = req.params.name

       const user =  await bodybuilder.find({name})
   
   
       res.status(200).send(user)
    }catch(e){
       res.status(400).send(e)
       console.log(e)
   
    }
      
   })

   // updating the data form database

   router.patch('/bodybuilder/:id',async (req, res)=>{
 
    try{
        const _id = req.params.id

        const user =  await bodybuilder.findByIdAndUpdate(_id, req.body)
     
        res.status(200).send(user)
        
    }catch(e){
        res.status(404).send(e)
        console.log(e)

    }

 

   })


   router.delete('/bodybuilder/:id', async (req, res)=>{
try{
    const _id = req.params.id
    const user = await  bodybuilder.findByIdAndDelete(_id)
    res.send(`data has been delete ${user}`)
}catch(e){
console.log(e)
}
   

   })





module.exports= router