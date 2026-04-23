const express = require('express')
const path= require('path')
const app = express() 

console.log('Folder anmee:'+path.dirname(__filename));
console.log('Folder anmee:'+path.dirname(__dirname));
console.log('file anmee:'+path.basename(__filename));
console.log('Parse:',path.parse(__filename));
//join


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


