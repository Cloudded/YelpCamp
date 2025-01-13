const mongoose = require('mongoose');
const { title } = require('process');

mongoose.connect('mongodb://localhost:27017/mongoApp')
    .then(() => {
        console.log('Connection open');
    })
    .catch(err => {
        console.log('Error:', err);
    });

const movieApp = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieApp);
const amadeus = new Movie({ title: 'Amadeus', year: 1984, score: 9.2, rating: 'R' });
