const express = require('express')

const app = express() 

app.get('/', (req, res) => {
    res.send(`<h1>Hello Hamza This is Front Page</h1>
         <p>This is my first Node.js website</p>
        `)
})
app.get('/about', (req, res) => {
    res.send('Hello Hamza This is About Page')
})
app.get('/contact', (req, res) => {
    res.send('Hello Hamza This is Contact Page')
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');

})