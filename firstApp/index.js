const express = require('express');
const app = express();
//  console.dir(app);

// app.use((req, res) => {
//     console.log('We got a new request');
//     res.send('Hello, we got your request! This is a response!')
// })

app.get('/cat', (req, res) => {
    res.send('This is about cats');
})

app.get('/base', (req, res) => {
    res.send('This is the base route');
})

app.get('*', (req, res) => {
    res.send('I am using *');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

