const express = require('express')
const path= require('path')
const fs=require('fs');
const os=require('os');

const e = require('express');
const { buffer } = require('stream/consumers');
const app = express() 



//path module
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


//file system (fs)

//make a directory
fs.mkdir(path.join(__dirname,'/test2'),(error)=>{
    if(error){
      console.log(error);
      return;
    }
    else{
        console.log('Folder is created');
        
    }
})
//create file
//write file
//three parameters path,what do you want to write ,function for error
//cannot create new file just iverrite all data of file 
//if you want to add some things you have to append

fs.writeFile(path.join(__dirname,'/test2','textrandom.txt'),"THIS IS TEXT FILE WTH RANDOM TXT ",function(ERROR){
    if(ERROR){
      console.log(ERROR);
      return;
    }
    else{
        console.log('TEXT file  is created');
    }
    //if you want to append do this
    fs.appendFile(path.join(__dirname,'/test2','textrandom.txt'),"\nAppened text file ",function(ERROR){
    if(ERROR){
      console.log(ERROR);
      return;
    }
    else{
        console.log('data append');
    }})

})

//readfile  non blocking other workinh chalta raha ga (async) 
//readfile syn is normal block code agar ya complete ho ga to next move hoga  
fs.readFile(path.join(__dirname,'/test','text.txt'),function(ERROR,data){
    if(ERROR){
      console.log(ERROR);
      return;
    }
    else{
        //print buufer
        console.log(data);
        //to conver do this
        const cotent=Buffer.from(data)
        console.log(cotent.toString());
        
    }
})

//one more option to read withOUT facing buffer
fs.readFile(path.join(__dirname,'/test','text.txt'),'utf-8',function(ERROR,data){
    if(ERROR){
      console.log(ERROR);
      return;
    }
    else{
        console.log(data);
        
    }
})


//os module paractise

console.log("hostname:",os.hostname());

console.log("type of os:",os.type());

console.log("paltform:",os.platform());

console.log("deatil:",os.cpus());

console.log("deatil:",os.freemem());

console.log("deatil:",os.totalmem());

console.log("deatil:",os.uptime());



// const express = require('express');
// const app = express();

// app.use(express.json());

// const taskRoutes = require('./routes/tasks');
// app.use('/api/tasks', taskRoutes);

// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// });

 