const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require("../Models/User");
require('dotenv').config();

const router = express.Router();

const createEmbedding = async(query) =>{
    const response = await fetch('http://127.0.0.1:5000/embed', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: query })
    });

    const { embedding } = await response.json();
    return embedding;
}


router.post('/signup',async(req,res)=>{
    
    try{
        const{fullname,email,password,companyname,companyurl} = req.body;
        const user = await UserModel.findOne({email});

        if(user){
            return res.json({message:"User already exists"});
        }
        // const embedding = await createEmbedding(context);
        console.log(fullname);
        const hashedPassword = await bcrypt.hash(password,10);
        console.log(hashedPassword);
        const newUser = new UserModel({fullname,email,password:hashedPassword,companyname,companyurl});
        await newUser.save();
        const token = jwt.sign({id:newUser._id,email:newUser.email},process.env.JWT_SECRET,{expiresIn: '24h'});
        res.status(200).json({message:"User created successfully",success:true,token,email:newUser.email,id:newUser._id,companyurl:companyurl,name:newUser.fullname});
    }catch(error){
        console.log(error);
        res.json(error);
    }
});

router.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    console.log(email,password);
    const user = await UserModel.findOne({email});
    if(!user){
        return res.json({message:"User not found!"});
    }
    const isPasswordValid = await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        return res.json({message:"Username or password is incorrect"});
    }
    const token = jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,{expiresIn: '24h'});

    res.status(200).json({message:"Login Success",success:true,token,email:user.email,id:user._id,companyurl:user.companyurl,name:user.fullname});
});

module.exports = router;

