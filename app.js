const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 8000;

const DB = 'mongodb+srv://jyoti:Vande@matram786@cluster0.ikvuv.mongodb.net/mern_300521?retryWrites=true&w=majority';

mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{console.log("CONNECTED TO DB");}).catch((err)=>console.log('not connected to DB',err));

app.get('/',(req,res)=>{
    res.send("hello world from server");
});

app.get('/about',(req,res)=>{
    res.send("hello ABOUT ME from server");
});

app.get('/contact',(req,res)=>{
    res.send("hello IN CONTACT from server");
});

app.get('/signin',(req,res)=>{
    res.send("hello IN signin from server");
});

app.get('/signup',(req,res)=>{
    res.send("hello IN signup from server");
});


app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})