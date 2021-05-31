const express = require('express');
const router = express.Router();
require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req,res)=>{
    res.send("hello from the server router");
});

// for fetching data from form for backend use (using promises)
// router.post('/register', (req,res)=>{
//     const {name,email,phone,work,password,cpassword} = req.body;
//     if( !name ||  !email|| !phone|| !work|| !password|| !cpassword )
//     {
//         return res.status(422).json({error:"plz fill required field"});
//     }
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error: "Email already exist"});
//         }
//         const user = new User({name,email,phone,work,password,cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message: "user registered successfully"});
//         }).catch((err)=>res.status(500).json({error: "Failed to register"}));
//     }).catch((err)=>console.log(err));
// });










router.post('/register',async (req,res)=>{
    const {name, email, phone, work, password, cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword)
    {
        return res.status(422).json("Please fill the required fields.");
    }

    try{
        const response = await User.findOne({email:email});
        if(response)
        {
            return res.send("Email already exist");
        }

        const user = await new User(req.body);
        const registerd = await user.save();
        if(registerd)
        {
            return res.status(200).json("User created successfully");
        }

    }catch(err){
        console.log(err);
        return res.send({err:"Error while Registering user."});
    }
})


























module.exports = router;