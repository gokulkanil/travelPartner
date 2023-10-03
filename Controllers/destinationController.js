const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const bodyparser=require("body-parser");

const destination=require("../Models/destination")

exports.addDest=async (req,res)=>{
    console.log("In addDest")
    try{
        const data=await destination.create(req.body);
        if(!data){
            res.status(500).json({message:"Couldn't add Destination"})
        }
        return res.status(200).json({message:"Destination added succesfully"})

    }
    catch(error){
        console.log(error)
    }

}

exports.findDest=async(req,res)=>{
    console.log("In findDest")
    const city=req.params.destcity;
    try{
        const data=await destination.find({destcity:city})
        if(!data){
            res.status(500).json({message:"Cannot find any destinations services in the selected city"});

        }
        return res.status(200).send(data)
    }
    catch(error){
        console.log(error)
    }
} 

