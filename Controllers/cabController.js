const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const bodyparser=require("body-parser");

const cab=require("../Models/cab")

exports.addCab=async (req,res)=>{
    console.log("In addCab")
    try{
        const data=await cab.create(req.body);
        if(!data){
            res.status(500).json({message:"Couldn't add Cab"})
        }
        return res.status(200).json({message:"Cab added succesfully"})

    }
    catch(error){
        console.log(error)
    }

}

exports.findCab=async(req,res)=>{
    console.log("In findCab")
    const city=req.params.id;
    try{
        const data=await cab.find({cabcityname:city})
        if(!data){
            res.status(500).json({message:"Cannot find any cab services in the selected city"});

        }
        return res.status(200).send(data)
    }
    catch(error){
        console.log(error)
    }
} 

