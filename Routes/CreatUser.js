const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator')
const jwt=require("jsonwebtoken");
const bcrypt = require("bcrypt");//notbcryptjs
const jwtSecret="mynameisashutoshsonipeoplecallmeash";
//creating a new user
router.post("/creatuser", [
//validation rules 
body('email').isEmail(),
body('password').isLength({min:5}),
body('password','Incorrect Password').isLength({min:5})]
//validation rules end 
,async(req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors : errors.array()});
    }

    const salt=await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt)

    try{
        await User.create({
            name: req.body.name,
            password: secPassword,
            email: req.body.email,
            location: req.body.location
            //note that the order of these doesnt matter . but thy must be same 
        })
        //if the above thing happens than do send a responce
    .then(res.json({success:true}))  
    } catch(error)
    {
        console.log(error)
        res.json({success:false});
    }
})
//logging in a user already having an account
router.post("/loginuser",
[
    body('email').isEmail(),
    body('password','Incorrect Password').isLength({min:5})
]

,async(req,res)=>{
    
    //validationprcessst
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({error: errors.array()});
    }
    let email = req.body.email;
    //validationprccssend
    try{
        let userData = await User.findOne({email});//finding any data linked to the enetered email
        if(!userData)//if email is not found
        {
            return res.status(400).json({errors: "Try logging in with correct credentials (EMAIL NOT FOUND)"})
        }

        const pwdCompare = await bcrypt.compare(req.body.password,userData.password)

        if(!pwdCompare)//if psswd doesnt match
        {
            return res.status(400).json({errors: "Try logging in with correct credentials (INCORRECT PSSWD)"})
        }
        const data={
            user:{
                id:userData.id
            }
        }
        const authToken=jwt.sign(data,jwtSecret)
        return res.json({success:true,authToken:authToken})
    } catch(error)
    {
        console.log(error)
        res.json({success:false});
    }
})

module.exports=router;