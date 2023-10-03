const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const bodyparser=require("body-parser");

const hotel=require("../Models/hotel")

exports.addHotel=async (req,res)=>{
    console.log("In addHotel")
    try{
        const data=await hotel.create(req.body);
        if(!data){
            res.status(500).json({message:"Couldn't add hotel"})
        }
        return res.status(200).json({message:"Hotel added succesfully"})

    }
    catch(error){
        console.log(error)
    }

}

exports.findHotels=async(req,res)=>{
    console.log("In findHotel")
    const city=req.params.hotelcity;
    try{
        const data=await hotel.find({hotelcity:city})
        if(!data){
            res.status(500).json({message:"Cannot find any Hotels in the selected city"});

        }
        return res.status(200).send(data)
    }
    catch(error){
        console.log(error)
    }
} 

