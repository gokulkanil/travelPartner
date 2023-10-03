const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const bodyparser=require("body-parser");

const user=require("../Models/user")


exports.addUser= async(req,res)=>{
    console.log("In add user");
    try{
        const data= await user.create(req.body);
        if(!data){
            res.status(500).json({message:"Failed to add user"})
        }
        return res.status(200).json({message:"User added Succesfully"})
    }catch(error){
        console.log(error);
        res.status(200).json({message:error})
        res.send(data)

    }
}

exports.login=async(req,res)=>{
    console.log("In login");
    try{
        const data=await user.findOne({$and:[{email:req.body.email,passwd:req.body.passwd}]})
        if(!data){
            res.status(500).json({message:"email id or password is incorrect"})
        }
        console.log(data)
        return res.status(200).json({message:"Login Succesfull"})
        
    }catch(error){
        console.log(error)

    }
}