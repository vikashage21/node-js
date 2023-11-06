const EventEmitter =  require('events')
const events= new EventEmitter();


events.on('sayMyName',()=>{
    console.log('your name is vikash')
})

events.emit('sayMyName')



