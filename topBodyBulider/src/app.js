const express = require('express')

const app= express()

const PORT = process.env.PORT || 8000

const bodyBuilderRouter = require('./router/bodybulider')

app.use(express.json())

require('./conn/conn')


app.use(bodyBuilderRouter)


// listing on port 8000

app.listen(PORT,()=>{
    console.log('listening on Port 8000')
})
