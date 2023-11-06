// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');
// // test is database 

// const Cat = mongoose.model('Cat', { name: String }); // creating schema 

// const kitty = new Cat({ name: 'Zildjian' }); // insert 


// kitty.save().then(() => console.log('meow')); 

const mongoose = require ('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce').then(()=>{
    console.log('connecting to database')
}).catch((err)=>{
    console.log(err)

})

// creating schema 

const productSchema = mongoose.Schema({
    name : String,
    price: Number,
    
})

// creating model in mongoose ..... collections 

const Product = new mongoose.model('Product',productSchema);


// creating documents inside collections 

const laptop = new Product({
    name:'hp',
    price:85000
})

// inserting the data inside the databse

laptop.save().then((data)=>{
    console.log('data has been saved')
    console.log(data)
    

}).catch(()=>{
    console.log('data is not saved inside database')
})


