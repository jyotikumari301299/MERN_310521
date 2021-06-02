const express = require('express');
const router = express.Router();
require('../db/conn');
const User = require('../model/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/', (req,res)=>{
    res.send("hello from the server router");
});

// register
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
        else if(password != cpassword)
        {
            return res.status(422).json("password and cpassword is not matching.");
        }
        else{
            const user = await new User(req.body);
        // console.log(user.password);
        const registerd = await user.save();
        if(registerd)
        {
            return res.status(200).json("User created successfully");
        }
        }

    }catch(err){
        console.log(err);
        return res.send({err:"Error while Registering user."});
    }
})

// login

router.post('/signin',  async(req,res)=>{
  try{
      let token;
   const {email, password} = req.body;
   if(!email || !password)
   {
       return res.json("all fields are required");
   }
        const user = await User.findOne({email:email});
        // agar email exist krta h then
        if( user){
            const isMatch = await bcrypt.compare(password,user.password);
            // password check kro ki match krta h ya nhi
            if(isMatch)
           { 
             token = await user.generateAuthToken();
               return res.status(200).json("Sign in success");
            }
           else{
            return res.status(422).json("Invalid credentials");
           }
        }
        else
        return res.status(422).json("Invalid credentials");

        //    generating cookie
        res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 2589200000),
            httpOnly: true
        });
    }catch(err){
        console.log(err);
    }
})





module.exports = router;