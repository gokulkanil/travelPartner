const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const bodyparser=require("body-parser");

const cards=require("../Models/card")

exports.payment=async(req,res)=>{
        console.log("In Payment Page");
        try{
            const cardNo= req.body.cardNo;
            const PIN=req.body.PIN;
            const amount=req.body.amount;
            const data= await cards.findOne({$and:[{cardNo:cardNo,PIN:PIN}]})
            if(!data){
                console.log("Card not found");
                return res.status(401).json({message:"Incorrect card details"})
            }
            const bal=data.balance
            if(bal<amount){
                return res.status(500).json({message:"Insufficient Balance"})
            }
            const remaining_Balance=bal-amount;
            const data1=await cards.updateOne({cardNo:cardNo},{$set:{balance:balafter}})
            const message="Payment Succesfull";
            return res.status(200).json({message,remaining_Balance})
        }
        catch(error){
            console.log(error);
        }
}

exports.addCard=async (req,res)=>{
    console.log("In add card");
    const cardNo=req.body.cardNo;
    const PIN=req.body.PIN;
    const balance=req.body.balance
    try{
        data=await cards.create({cardNo:cardNo,PIN:PIN,balance:balance})
        console.log(data)
        res.status(200).send(data)
    }
    catch(error){
        console.log(error)
    }
}