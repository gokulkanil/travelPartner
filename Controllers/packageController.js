const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const bodyparser=require("body-parser");

const package=require("../Models/package")

exports.addPackage=async (req,res)=>{
    console.log("In addPackage")
    try{
        const data=await package.create(req.body);
        if(!data){
            res.status(500).json({message:"Couldn't add Package"})
        }
        return res.status(200).json({message:"Package added succesfully"})

    }
    catch(error){
        console.log(error)
    }

}

exports.findPackage=async(req,res)=>{
    console.log("In findPackage")  
    const city=req.body.city;
    const maxbudget=req.body.maxbudget;
    console.log(city);
    console.log(maxbudget);
    try{
        const data=await package.find({$and:[{packagecity:city},{packageprice:{$lt:maxbudget}}]})
        if(data.length<1){
            res.status(500).json({message:"Cannot find any packages in the selected city"});

        }
        console.log(data)
        return res.status(200).send(data)
    }
    catch(error){
        console.log(error)
    }
} 

