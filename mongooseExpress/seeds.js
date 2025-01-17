const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(err => {
        console.log('Error connecting to MongoDB', err)
        console.log(err)
    });

    const p = new Product({
        name: 'Ruby Grapefruit',
        price: 1.99,
        category: 'fruit'
    })
    
    p.save()
    .then(p => {
        console.log(p)
    })
    .catch(e => {
        console.log(e)
    });
