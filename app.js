
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config({path: './config.env'});

const DB = process.env.DATABASE;
const PORT = process.env.PORT;

require('./db/conn');
// requiring userSchema

app.use(express.json());

// linked the router file
app.use(require('./router/auth'));



app.get('/',(req,res)=>{
    res.send("hello world from server");
});

app.get('/about',(req,res)=>{
    res.send("hello ABOUT ME from server");
});

app.get('/contact',(req,res)=>{
    res.send("hello IN CONTACT from server");
});

// app.get('/signin',(req,res)=>{
//     res.send("hello IN signin from server");
// });

app.get('/signup',(req,res)=>{
    res.send("hello IN signup from server");
});


app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
})