const express=require('express')
const app=express()
 
app.use(function(req,res,next){
    console.log('This is middle where');
    res.send('midlleware')
    next()
})
app.use(function(req,res,next){
    console.log('This is middle where2');
    res.send('midlleware2')
    next()
})

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});
app.post('/data', (req, res) => {
    const data = req.body;
    res.send(`Received data: ${JSON.stringify(data)}`);
});

app.listen(3000,function(){
    console.log('server is running');
    
})